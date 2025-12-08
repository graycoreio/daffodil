<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffImageComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'An optimized image component with built-in lazy loading and aspect ratio handling.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffImageComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'src' => [
                            'type' => 'string',
                            'description' => 'The URL of the image'
                        ],
                        'alt' => [
                            'type' => 'string',
                            'description' => 'The alternate text for the image'
                        ],
                        'width' => [
                            'type' => 'number',
                            'description' => 'The width of the image in pixels'
                        ],
                        'height' => [
                            'type' => 'number',
                            'description' => 'The height of the image in pixels'
                        ],
                        'skeleton' => [
                            'type' => 'boolean',
                            'description' => 'Whether to show a skeleton loading state'
                        ],
                        'priority' => [
                            'type' => 'boolean',
                            'description' => 'Whether the image should be loaded eagerly (priority images)'
                        ]
                    ],
                    'required' => ['src', 'alt', 'width', 'height', 'skeleton', 'priority'],
                    'additionalProperties' => false
                ]
            ],
            'required' => ['type', 'name', 'inputs'],
            'additionalProperties' => false
        ];
    }
}
