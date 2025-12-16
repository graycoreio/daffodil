<?php

/**
 * Copyright © Graycore. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

use Graycore\CmsAiBuilder\Api\LlmModelInterface;
use Graycore\CmsAiBuilder\Api\Result\GenerateSchemaResultInterface;
use Graycore\CmsAiBuilder\Api\SchemaChatGeneratorInterface;
use Graycore\CmsAiBuilder\Service\Data\GenerateSchemaResult;
use Graycore\CmsAiBuilder\Service\Schema\JsonPatchResponseSchema;
use Magento\Framework\Serialize\Serializer\Json;
use Psr\Log\LoggerInterface;

class SchemaChatGenerator implements SchemaChatGeneratorInterface
{
    /**
     * @param Json $json
     * @param LoggerInterface $logger
     * @param Prompt $prompt
     * @param PatchApplier $patchApplier
     * @param LlmModelInterface $llmModel
     * @param JsonPatchResponseSchema $responseSchema
     */
    public function __construct(
        private readonly Json $json,
        private readonly LoggerInterface $logger,
        private readonly Prompt $prompt,
        private readonly PatchApplier $patchApplier,
        private readonly LlmModelInterface $llmModel,
        private readonly JsonPatchResponseSchema $responseSchema
    ) {
    }

    /**
     * Generate JSON Patch from user prompt using OpenAI
     *
     * @param string $prompt
     * @param string|null $schema
     * @param array|null $conversationHistory
     * @return GenerateSchemaResultInterface
     * @throws \Exception
     */
    public function generate(
        string $prompt,
        ?string $schema,
        ?array $conversationHistory = null
    ): GenerateSchemaResultInterface {
        $systemPrompt = $this->prompt->getSystemPrompt();

        if (!$schema || $schema === '[]') {
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
            'content' => $prompt .
                "\n\n---\nCURRENT SCHEMA (preserve this unless the request requires changes):\n" . $schema,
        ];

        try {
            // Call the LLM to get patch response
            $llmResult = $this->llmModel->call($this->responseSchema->getSchema(), $messages);

            // Apply JSON Patch to current schema
            $patchedSchema = $this->patchApplier->applyPatch($schema, $llmResult->getPatch());

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
                'message' => $llmResult->getReply(),
                'schema' => $patchedSchema
            ];

            return new GenerateSchemaResult($llmResult->getReply(), $patchedSchema, $updatedHistory);
        } catch (\Exception $e) {
            $this->logger->error('Failed to generate schema: ' . $e->getMessage());
            throw $e;
        }
    }
}
