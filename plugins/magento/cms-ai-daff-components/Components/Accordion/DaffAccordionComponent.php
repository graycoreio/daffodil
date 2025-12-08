<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components\Accordion;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffAccordionComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'A container for grouping accordion items that can be expanded and collapsed.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffAccordionComponent'],
                'children' => [
                    'type' => 'array',
                    'items' => ['$ref' => '#/$defs/DaffAccordionItemComponentSchema']
                ]
            ],
            'required' => ['type', 'name', 'children'],
            'additionalProperties' => false
        ];
    }
}
