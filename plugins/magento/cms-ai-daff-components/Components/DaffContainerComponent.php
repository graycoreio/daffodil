<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffContainerComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A layout container that constrains content width and provides consistent spacing.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffContainerComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'size' => [
                            'type' => 'string',
                            'enum' => ['xs', 'sm', 'md', 'lg', 'xl'],
                            'description' => 'Container max-width size'
                        ]
                    ],
                    'additionalProperties' => false,
                    'required' => ['size'],
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
