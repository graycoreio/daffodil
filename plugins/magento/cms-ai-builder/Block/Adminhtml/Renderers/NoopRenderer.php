<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block\Adminhtml\Renderers;

use Magento\Backend\Block\Template;

class NoopRenderer extends Template
{
    /**
     * Return empty string for no-op rendering
     *
     * @param string $alias
     * @param boolean $useCache
     * @return string
     */
    public function getChildHtml($alias = '', $useCache = true)
    {
        return '';
    }
}
