<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block\Adminhtml\Renderers;

use Graycore\CmsAiBuilder\Api\RendererInterface;
use Graycore\CmsAiBuilder\ViewModel\Adminhtml\Schema;
use Magento\Backend\Block\Template;
use Magento\Backend\Block\Template\Context;

class NativeRenderer extends Template
{
    /**
     * @param Context $context
     * @param Schema $schema
     * @param RendererInterface $renderer
     * @param array $data
     */
    public function __construct(
        Context $context,
        private readonly Schema $schema,
        private readonly RendererInterface $renderer,
        array $data = [],
    ) {
        parent::__construct($context, $data);
    }

    /**
     * @inheritDoc
     */
    public function getChildHtml($alias = '', $useCache = true)
    {
        $schema = $this->schema->getSchema();

        if ($schema === null) {
            return '';
        }

        return $this->renderer->render($schema);
    }
}
