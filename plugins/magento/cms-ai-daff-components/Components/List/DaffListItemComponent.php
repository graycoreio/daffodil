<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components\List;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffListItemComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'An individual item within a list component.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffListItemComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'active' => [
                            'type' => 'boolean',
                            'description' => 'Whether the item is the currently active item in a nav list'
                        ]
                    ],
                    'required' => ['active'],
                    'additionalProperties' => false
                ],
                'children' => [
                    'type' => 'array',
                    'items' => ['$ref' => '#/$defs/DaffContentSchema']
                ]
            ],
            'required' => ['type', 'name', 'children', 'inputs'],
            'additionalProperties' => false
        ];
    }
}
