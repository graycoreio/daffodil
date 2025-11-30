<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

use Graycore\CmsAiBuilder\Helper\Config;
use Graycore\CmsAiBuilder\Service\Schema\JsonPatchResponseSchema;
use Magento\Framework\HTTP\Client\Curl;
use Magento\Framework\Serialize\Serializer\Json;
use Psr\Log\LoggerInterface;

class ModelService
{
    private const OPENAI_API_URL = 'https://api.openai.com/v1/responses';

    public function __construct(
        private readonly Config $config,
        private readonly Curl $curl,
        private readonly Json $json,
        private readonly LoggerInterface $logger,
        private readonly JsonPatchResponseSchema $responseSchema
    ) {
    }

    /**
     * Call OpenAI API with messages
     *
     * @param array $messages Array of message objects with 'role' and 'content'
     * @param int|null $storeId
     * @return array The parsed response content
     * @throws \Exception
     */
    public function callModel(array $messages, ?int $storeId = null): array
    {
        if (!$this->config->isEnabled($storeId)) {
            throw new \Exception('AI CMS Builder is not enabled');
        }

        $apiKey = $this->config->getOpenAiApiKey();
        if (!$apiKey) {
            throw new \Exception('OpenAI API key is not configured');
        }

        $payload = [
            'model' => $this->config->getOpenAiModel(),
            'input' => $messages,
            'text' => [
                'format' => $this->responseSchema->getSchema()
            ]
        ];

        try {
            $this->curl->addHeader('Content-Type', 'application/json');
            $this->curl->addHeader('Authorization', 'Bearer ' . $apiKey);
            $this->curl->post(self::OPENAI_API_URL, $this->json->serialize($payload));

            $response = $this->curl->getBody();
            $responseData = $this->json->unserialize($response);

            if (isset($responseData['error'])) {
                throw new \Exception('OpenAI API error: ' . $responseData['error']['message']);
            }

            // The /v1/responses endpoint returns structured data directly in 'text'
            if (!isset($responseData['output'])) {
                throw new \Exception('Invalid response from OpenAI API');
            }

            if (!isset($responseData['output'][1]['content'][0]['text'])) {
                throw new \Exception('Invalid response structure from OpenAI API');
            }

            $structuredResponse = $responseData['output'][1]['content'][0]['text'];

            // With structured outputs, the response is already parsed JSON
            return $this->json->unserialize($structuredResponse);

        } catch (\Exception $e) {
            $this->logger->error('Failed to call model: ' . $e->getMessage());
            throw $e;
        }
    }
}
