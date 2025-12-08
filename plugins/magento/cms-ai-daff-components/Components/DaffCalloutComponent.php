<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffCalloutComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A versatile pre-styled container used to highlight key pieces of content in a visually distinct way.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffCalloutComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'textAlignment' => [
                            'type' => 'string',
                            'enum' => ['left', 'center', 'right'],
                            'description' => 'Text alignment for callout content'
                        ],
                        'compact' => [
                            'type' => 'boolean',
                            'description' => 'Reduces padding for tighter spacing'
                        ],
                        'color' => [
                            'type' => 'string',
                            'enum' => ['primary', 'secondary', 'tertiary', 'light', 'dark', 'theme', 'theme-contrast'],
                            'description' => 'Background color palette'
                        ],
                    ],
                    'required' => ['textAlignment', 'compact', 'color'],
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
