<?php
/**
 * Copyright � Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\ViewModel\Adminhtml;

use Magento\Framework\App\Request\Http;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class Schema implements ArgumentInterface
{
    /**
     * @param Http $request
     */
    public function __construct(
        private readonly Http $request
    ) {
    }

    /**
     * Get the schema from the POST body
     *
     * The schema is expected to be JSON in the 'schema' POST field.
     *
     * @return array|null Decoded schema array, or null if not present/invalid
     */
    public function getSchema(): ?array
    {
        $schemaJson = $this->request->getPost('schema');

        if ($schemaJson === null || $schemaJson === '') {
            return null;
        }

        try {
            $schema = json_decode($schemaJson, true, 512, JSON_THROW_ON_ERROR);
            return is_array($schema) ? $schema : null;
        } catch (\JsonException) {
            return null;
        }
    }
}
