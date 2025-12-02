<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Test\Unit\Fixtures;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

/**
 * Test fixture component that mimics the DaffHeroComponent schema
 */
class DaffHeroComponentFixture implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffHeroComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'textAlignment' => [
                            'type' => 'string',
                            'enum' => ['left', 'center', 'right'],
                            'description' => 'Text alignment for hero content'
                        ],
                        'compact' => [
                            'type' => 'boolean',
                            'description' => 'Reduces padding for tighter spacing'
                        ],
                        'color' => [
                            'type' => 'string',
                            'enum' => ['primary', 'secondary', 'tertiary', 'light', 'dark', 'theme', 'theme-contrast'],
                            'description' => 'Background color palette'
                        ]
                    ],
                    'required' => ['textAlignment', 'compact', 'color'],
                    'additionalProperties' => false
                ],
                'children' => [
                    'type' => 'array',
                    'items' => ['$ref' => '#/$defs/DaffContentSchema']
                ]
            ],
            'required' => ['type', 'name', 'inputs', 'children'],
            'additionalProperties' => false
        ];
    }
}
