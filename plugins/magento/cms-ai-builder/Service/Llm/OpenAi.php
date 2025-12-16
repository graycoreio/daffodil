<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Llm;

use Graycore\CmsAiBuilder\Api\Exception\LlmApiException;
use Graycore\CmsAiBuilder\Api\Exception\LlmConfigurationException;
use Graycore\CmsAiBuilder\Api\Exception\LlmResponseException;
use Graycore\CmsAiBuilder\Api\LlmModelInterface;
use Graycore\CmsAiBuilder\Api\Result\LlmCallResultInterface;
use Graycore\CmsAiBuilder\Helper\Config;
use Graycore\CmsAiBuilder\Service\Data\LlmCallResult;
use Magento\Framework\HTTP\Client\Curl;
use Magento\Framework\Phrase;
use Magento\Framework\Serialize\Serializer\Json;

class OpenAi implements LlmModelInterface
{
    private const OPENAI_API_URL = 'https://api.openai.com/v1/responses';

    /**
     * @param Config $config
     * @param Curl $curl
     * @param Json $json
     */
    public function __construct(
        private readonly Config $config,
        private readonly Curl $curl,
        private readonly Json $json
    ) {
    }

    /**
     * @inheritdoc
     */
    public function call(array $schema, array $messages): LlmCallResultInterface
    {
        $apiKey = $this->config->getOpenAiApiKey();
        if (!$apiKey) {
            throw new LlmConfigurationException(new Phrase('OpenAI API key is not configured'));
        }

        $payload = [
            'model' => $this->config->getOpenAiModel(),
            'input' => $messages,
            'text' => [
                'format' => $schema
            ]
        ];

        $this->curl->addHeader('Content-Type', 'application/json');
        $this->curl->addHeader('Authorization', 'Bearer ' . $apiKey);
        $this->curl->post(self::OPENAI_API_URL, $this->json->serialize($payload));

        $response = $this->curl->getBody();
        $responseData = $this->json->unserialize($response);

        if (isset($responseData['error'])) {
            throw new LlmApiException(
                new Phrase('OpenAI API error: %1', [$responseData['error']['message']])
            );
        }

        if (!isset($responseData['output'])) {
            throw new LlmResponseException(new Phrase('Invalid response from OpenAI API'));
        }

        if (!isset($responseData['output'][1]['content'][0]['text'])) {
            throw new LlmResponseException(new Phrase('Invalid response structure from OpenAI API'));
        }

        $structuredResponse = $responseData['output'][1]['content'][0]['text'];
        $data = $this->json->unserialize($structuredResponse);

        // Validate response structure
        if (!isset($data['patch'])) {
            throw new LlmResponseException(new Phrase('Invalid response format: missing patch'));
        }

        if (!isset($data['reply'])) {
            throw new LlmResponseException(new Phrase('Invalid response format: missing reply'));
        }

        return new LlmCallResult($data['reply'], $data['patch']);
    }
}
