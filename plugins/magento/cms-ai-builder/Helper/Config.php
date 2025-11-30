<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\App\Helper\Context;
use Magento\Framework\Encryption\EncryptorInterface;
use Magento\Store\Model\ScopeInterface;

class Config extends AbstractHelper
{
    public const XML_PATH_ENABLED = 'ai_cms_builder/general/enabled';
    public const XML_PATH_OPENAI_API_KEY = 'ai_cms_builder/general/openai_api_key';
    public const XML_PATH_OPENAI_MODEL = 'ai_cms_builder/general/openai_model';
    public const XML_PATH_COMPONENT_REGISTRY = 'ai_cms_builder/component_registry/registry_json';
    public const XML_PATH_CUSTOM_POLYFILLS_SCRIPT = 'ai_cms_builder/editor_customization/custom_polyfills_script';
    public const XML_PATH_CUSTOM_MAIN_SCRIPT = 'ai_cms_builder/editor_customization/custom_main_script';

    /**
     * @param Context $context
     * @param EncryptorInterface $encryptor
     */
    public function __construct(
        Context $context,
        private readonly EncryptorInterface $encryptor
    ) {
        parent::__construct($context);
    }

    /**
     * Check if AI CMS Builder is enabled
     *
     * @param int|null $storeId
     * @return bool
     */
    public function isEnabled(?int $storeId = null): bool
    {
        return $this->scopeConfig->isSetFlag(
            self::XML_PATH_ENABLED,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );
    }

    /**
     * Get OpenAI API Key (decrypted)
     *
     * @return string|null
     */
    public function getOpenAiApiKey(): ?string
    {
        $encryptedKey = $this->scopeConfig->getValue(
            self::XML_PATH_OPENAI_API_KEY,
            ScopeInterface::SCOPE_STORE
        );

        return $encryptedKey ? $this->encryptor->decrypt($encryptedKey) : null;
    }

    /**
     * Get OpenAI Model
     *
     * @return string
     */
    public function getOpenAiModel(): string
    {
        return (string)$this->scopeConfig->getValue(
            self::XML_PATH_OPENAI_MODEL,
            ScopeInterface::SCOPE_STORE
        );
    }

    /**
     * Get component registry as array
     *
     * @param int|null $storeId
     * @return array
     */
    public function getComponentRegistry(?int $storeId = null): array
    {
        $registryJson = $this->scopeConfig->getValue(
            self::XML_PATH_COMPONENT_REGISTRY,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );

        if (!$registryJson) {
            return [];
        }

        try {
            return json_decode($registryJson, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $e) {
            $this->_logger->error('Failed to decode component registry JSON: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Get component registry as JSON string for system prompt
     *
     * @param int|null $storeId
     * @return string
     */
    public function getComponentRegistryForPrompt(?int $storeId = null): string
    {
        $registry = $this->getComponentRegistry($storeId);
        return json_encode($registry, JSON_PRETTY_PRINT);
    }

    /**
     * Get custom polyfills script path or default
     *
     * @param int|null $storeId
     * @return string
     */
    public function getPolyfillsScriptPath(?int $storeId = null): string
    {
        $customPath = $this->scopeConfig->getValue(
            self::XML_PATH_CUSTOM_POLYFILLS_SCRIPT,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );

        return $customPath;
    }

    /**
     * Get custom main script path or default
     *
     * @param int|null $storeId
     * @return string
     */
    public function getMainScriptPath(?int $storeId = null): string
    {
        $customPath = $this->scopeConfig->getValue(
            self::XML_PATH_CUSTOM_MAIN_SCRIPT,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );

        return $customPath;
    }
}
