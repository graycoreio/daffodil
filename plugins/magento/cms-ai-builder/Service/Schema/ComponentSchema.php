<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Schema;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

/**
 * JSON Schema definitions for Daffodil component schemas
 */
class ComponentSchema
{
    /**
     * @param ComponentInterface[] $components
     */
    public function __construct(
        private readonly array $components = []
    ) {
    }

    /**
     * Get all component schema definitions
     *
     * @return array
     */
    public function getSchemas(): array
    {
        $schemas = [];
        foreach ($this->components as $name => $component) {
            $schemas[$name] = $component->getSchema();
        }
        return $schemas;
    }
}