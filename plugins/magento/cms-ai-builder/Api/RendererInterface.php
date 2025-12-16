<?php

/**
 * Copyright � Oliverio Gombert. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api;

interface RendererInterface
{
    /**
     * Render JSON content to HTML
     *
     * @param string $schema
     * @return string
     */
    public function render(array $schema): string;
}
