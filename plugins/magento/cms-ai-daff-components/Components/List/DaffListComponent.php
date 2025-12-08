<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components\List;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffListComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A standard list component for grouping generic content items.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffListComponent'],
                'children' => [
                    'type' => 'array',
                    'items' => ['$ref' => '#/$defs/DaffListItemComponentSchema']
                ]
            ],
            'required' => ['type', 'name', 'children'],
            'additionalProperties' => false
        ];
    }
}
