<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiDaffComponents\Components;

use Graycore\CmsAiBuilder\Api\ComponentInterface;

class DaffYoutubePlayerComponent implements ComponentInterface
{
    /**
     * @inheritDoc
     */
    public function getSchema(): array
    {
        return [
            'type' => 'object',
            'description' => 'An embedded YouTube video player component with responsive aspect ratio.',
            'properties' => [
                'type' => ['type' => 'string', 'const' => 'componentSchema'],
                'name' => ['type' => 'string', 'const' => 'DaffYoutubePlayerComponent'],
                'inputs' => [
                    'type' => 'object',
                    'properties' => [
                        'src' => [
                            'type' => 'string',
                            'description' => 'The YouTube embed URL'
                        ],
                        'title' => [
                            'type' => 'string',
                            'description' => 'The title of the video for accessibility'
                        ],
                        'width' => [
                            'type' => 'number',
                            'description' => 'The width of the player in pixels'
                        ],
                        'height' => [
                            'type' => 'number',
                            'description' => 'The height of the player in pixels'
                        ]
                    ],
                    'required' => ['src', 'width', 'height', 'title'],
                    'additionalProperties' => false
                ]
            ],
            'required' => ['type', 'name', 'inputs'],
            'additionalProperties' => false
        ];
    }
}
