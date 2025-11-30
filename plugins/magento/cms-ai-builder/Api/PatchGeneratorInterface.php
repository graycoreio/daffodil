<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api;

interface PatchGeneratorInterface
{
    /**
     * Generate schema from prompt
     *
     * @param string $prompt
     * @return string JSON encoded schema
     */
    public function generate(string $prompt): string;
}
