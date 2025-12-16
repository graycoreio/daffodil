<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Llm;

use Graycore\CmsAiBuilder\Api\LlmModelInterface;
use Graycore\CmsAiBuilder\Api\Result\LlmCallResultInterface;
use Graycore\CmsAiBuilder\Helper\Config;
use Graycore\CmsAiBuilder\Service\Data\LlmCallResult;
use Magento\Framework\HTTP\Client\Curl;
use Magento\Framework\Serialize\Serializer\Json;
use Psr\Log\LoggerInterface;

class OpenAi implements LlmModelInterface
{
    private const OPENAI_API_URL = 'https://api.openai.com/v1/responses';

    /**
     * @param Config $config
     * @param Curl $curl
     * @param Json $json
     * @param LoggerInterface $logger
     */
    public function __construct(
        private readonly Config $config,
        private readonly Curl $curl,
        private readonly Json $json,
        private readonly LoggerInterface $logger
    ) {
    }

    /**
     * @inheritdoc
     */
    public function call(array $schema, array $messages): LlmCallResultInterface
    {
        $apiKey = $this->config->getOpenAiApiKey();
        if (!$apiKey) {
            throw new \Exception('OpenAI API key is not configured');
        }

        $payload = [
            'model' => $this->config->getOpenAiModel(),
            'input' => $messages,
            'text' => [
                'format' => $schema
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

            if (!isset($responseData['output'])) {
                throw new \Exception('Invalid response from OpenAI API');
            }

            if (!isset($responseData['output'][1]['content'][0]['text'])) {
                throw new \Exception('Invalid response structure from OpenAI API');
            }

            $structuredResponse = $responseData['output'][1]['content'][0]['text'];
            $data = $this->json->unserialize($structuredResponse);

            // Validate response structure
            if (!isset($data['patch'])) {
                throw new \Exception('Invalid response format: missing patch');
            }

            if (!isset($data['reply'])) {
                throw new \Exception('Invalid response format: missing reply');
            }

            return new LlmCallResult($data['reply'], $data['patch']);
            
        } catch (\Exception $e) {
            $this->logger->error('OpenAi: Failed to call model: ' . $e->getMessage());
            throw $e;
        }
    }
}
