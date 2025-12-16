<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block\Adminhtml\Renderers;

use Graycore\CmsAiBuilder\ViewModel\Adminhtml\Schema;
use Magento\Backend\Block\Template;
use Magento\Backend\Block\Template\Context;

class IdentityRenderer extends Template
{
    /**
     * @param Context $context
     * @param Schema $schema
     * @param array $data
     */
    public function __construct(
        Context $context,
        private readonly Schema $schema,
        array $data = []
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

        return json_encode($schema, JSON_THROW_ON_ERROR);
    }
}
