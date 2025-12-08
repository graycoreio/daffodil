<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffCardComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A basic card variant with a filled background for displaying grouped content.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffCardComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'color' => [
                            'type' => 'string',
                            'enum' => ['primary', 'secondary', 'tertiary', 'light', 'dark', 'theme', 'theme-contrast'],
                            'description' => 'Card color palette'
                        ],
                        'orientation' => [
                            'type' => 'string',
                            'enum' => ['vertical', 'horizontal'],
                            'description' => 'Card layout orientation'
                        ],
                        'elevated' => [
                            'type' => 'boolean',
                            'description' => 'Whether the card displays a shadow'
                        ]
                    ],
                    'required' => ['color', 'orientation', 'elevated'],
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
