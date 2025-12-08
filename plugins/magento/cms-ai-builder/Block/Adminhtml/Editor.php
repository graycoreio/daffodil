<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block\Adminhtml;

use Graycore\CmsAiBuilder\Helper\Config;
use Magento\Backend\Block\Template;
use Magento\Backend\Block\Template\Context;

class Editor extends Template
{
    /**
     * Admin route identifier for the built-in renderer
     */
    private const ADMIN_RENDERER_VALUE = 'admin';

    /**
     * Admin route path for the built-in renderer
     */
    private const ADMIN_RENDERER_ROUTE = 'CmsAiBuilder/renderer/index';

    /**
     * @param Context $context
     * @param Config $config
     * @param array $data
     */
    public function __construct(
        Context $context,
        private readonly Config $config,
        array $data = []
    ) {
        parent::__construct($context, $data);
    }

    /**
     * Get polyfills script path
     *
     * @return string|null
     */
    public function getPolyfillsScriptPath(): string|null
    {
        return $this->config->getPolyfillsScriptPath();
    }

    /**
     * Get main script path
     *
     * @return string
     */
    public function getMainScriptPath(): string
    {
        return $this->config->getMainScriptPath();
    }

    /**
     * Get the renderer URL from configuration
     *
     * Handles three cases:
     * - "admin": Returns the admin route URL for the built-in renderer
     * - Static file path: Returns the view file URL
     * - Empty: Returns null (disables iframe rendering)
     *
     * @return string|null
     */
    public function getRendererUrl(): ?string
    {
        $configValue = $this->config->getRendererUrl();

        if (empty($configValue)) {
            return null;
        }

        if ($configValue === self::ADMIN_RENDERER_VALUE) {
            return $this->getUrl(self::ADMIN_RENDERER_ROUTE);
        }

        return $this->getViewFileUrl($configValue);
    }

    /**
     * Get the renderer mode from configuration
     *
     * @return string 'csr' or 'ssr'
     */
    public function getRendererMode(): string
    {
        return $this->config->getRendererMode();
    }

    /**
     * Get the form key for CSRF protection
     *
     * @return string
     */
    public function getFormKey(): string
    {
        return $this->formKey->getFormKey();
    }

    /**
     * Get the renderer config as JSON
     *
     * @return string JSON-encoded renderer config or 'null'
     */
    public function getRendererConfigJson(): string
    {
        $rendererUrl = $this->getRendererUrl();

        if ($rendererUrl === null) {
            return 'null';
        }

        return json_encode([
            'url' => $rendererUrl,
            'mode' => $this->getRendererMode(),
            'formFields' => [
                'form_key' => $this->getFormKey(),
            ],
        ], JSON_THROW_ON_ERROR);
    }
}
