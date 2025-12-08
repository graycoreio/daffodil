<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffTagComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A tag component for labeling, categorizing, or filtering content.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffTagComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'color' => [
                            'type' => 'string',
                            'enum' => ['primary', 'secondary', 'tertiary', 'light', 'dark', 'theme', 'theme-contrast'],
                            'description' => 'Tag color palette'
                        ],
                        'size' => [
                            'type' => 'string',
                            'enum' => ['sm', 'md', 'lg'],
                            'description' => 'Tag size'
                        ],
                        'status' => [
                            'type' => 'string',
                            'enum' => ['warn', 'danger', 'success'],
                            'description' => 'Tag status indicator'
                        ],
                        'disabled' => [
                            'type' => 'boolean',
                            'description' => 'Whether the tag is disabled'
                        ],
                        'dismissible' => [
                            'type' => 'boolean',
                            'description' => 'Whether the tag can be dismissed by the user'
                        ]
                    ],
                    'required' => ['color', 'size', 'status', 'disabled', 'dismissible'],
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
