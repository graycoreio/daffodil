<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

use Graycore\CmsAiBuilder\Helper\Config;
use Magento\Framework\Serialize\Serializer\Json;
use Psr\Log\LoggerInterface;

class PatchGenerator
{
    /**
     * @param Config $config
     * @param Json $json
     * @param LoggerInterface $logger
     * @param Prompt $prompt
     * @param PatchApplier $patchApplier
     * @param ModelService $modelService
     */
    public function __construct(
        private readonly Config $config,
        private readonly Json $json,
        private readonly LoggerInterface $logger,
        private readonly Prompt $prompt,
        private readonly PatchApplier $patchApplier,
        private readonly ModelService $modelService
    ) {
    }

    /**
     * Generate JSON Patch from user prompt using OpenAI
     *
     * @param string $prompt
     * @param string $schema
     * @param array|null $conversationHistory
     * @param int|null $storeId
     * @return GenerateSchemaResult
     * @throws \Exception
     */
    public function generateSchema(string $prompt, string | null $schema, ?array $conversationHistory = null, ?int $storeId = null): GenerateSchemaResult
    {
        $componentRegistry = $this->config->getComponentRegistryForPrompt($storeId);
        $systemPrompt = $this->prompt->getSystemPrompt($componentRegistry);

        if(!$schema || $schema === '[]') {
            $schema = '{}';
        }

        // Build messages array with conversation history
        $messages = [
            [
                'role' => 'system',
                'content' => $systemPrompt
            ]
        ];

        // Add conversation history if available (convert from ChatMessage format to OpenAI format)
        // Limit to last 10 messages for efficiency
        if ($conversationHistory && is_array($conversationHistory)) {
            $recentHistory = array_slice($conversationHistory, -10);

            foreach ($recentHistory as $chatMessage) {
                $role = $chatMessage['type'] === 'user' ? 'user' : 'assistant';

                $messages[] = [
                    'role' => $role,
                    'content' => $chatMessage['message']
                ];
            }
        }

        // Add current user prompt with schema context
        $messages[] = [
            'role' => 'user',
            'content' => $prompt . "\n\n---\nCURRENT SCHEMA (preserve this unless the request requires changes):\n" . $schema,
        ];

        try {
            // Call the model service to get patch response
            $patchResponse = $this->modelService->callModel($messages, $storeId);

            // Validate response structure
            if (!isset($patchResponse['patch'])) {
                throw new \Exception('Invalid response format: missing patch');
            }

            if (!isset($patchResponse['reply'])) {
                throw new \Exception('Invalid response format: missing reply');
            }

            // Apply JSON Patch to current schema
            $patchedSchema = $this->patchApplier->applyPatch($schema, $patchResponse['patch']);

            // Build the ViewSchema response (with patched schema)
            $viewSchema = [
                'reply' => $patchResponse['reply'],
                'schema' => $patchedSchema
            ];

            // Build updated conversation history in ChatMessage format
            // Store full schemas in history, not patches
            $updatedHistory = $conversationHistory ?? [];
            $updatedHistory[] = [
                'type' => 'user',
                'message' => $prompt,
                'schema' => $this->json->unserialize($schema),
            ];
            $updatedHistory[] = [
                'type' => 'system',
                'message' => $patchResponse['reply'],
                'schema' => $patchedSchema
            ];

            return new GenerateSchemaResult($viewSchema, $updatedHistory);

        } catch (\Exception $e) {
            $this->logger->error('Failed to generate schema: ' . $e->getMessage());
            throw $e;
        }
    }
}
