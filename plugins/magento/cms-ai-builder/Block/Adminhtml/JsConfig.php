<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block\Adminhtml;

use Graycore\CmsAiBuilder\Helper\Config;
use Magento\Backend\Block\Template;
use Magento\Backend\Block\Template\Context;

class JsConfig extends Template
{
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
     * @return string
     */
    public function getPolyfillsScriptPath(): string | null
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
}
