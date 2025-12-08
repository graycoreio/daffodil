<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components\Accordion;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffAccordionItemComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'An individual accordion item with a title and collapsible content.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffAccordionItemComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'initiallyExpanded' => [
                            'type' => 'boolean',
                            'description' => 'Whether the accordion item is initially expanded'
                        ],
                        'disabled' => [
                            'type' => 'boolean',
                            'description' => 'Whether the accordion item is disabled'
                        ]
                    ],
                    'required' => ['initiallyExpanded', 'disabled'],
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
