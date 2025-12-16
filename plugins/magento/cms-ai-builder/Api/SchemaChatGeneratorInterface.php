<?php

/**
 * Copyright © Graycore. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api;

use Graycore\CmsAiBuilder\Api\Result\GenerateSchemaResultInterface;

interface SchemaChatGeneratorInterface
{
    /**
     * Generate JSON Patch from user prompt
     *
     * @param string $prompt
     * @param string|null $schema
     * @param array|null $conversationHistory
     * @param int|null $storeId
     * @return GenerateSchemaResultInterface
     * @throws \Exception
     */
    public function generate(
        string $prompt,
        ?string $schema,
        ?array $conversationHistory = null,
        ?int $storeId = null
    ): GenerateSchemaResultInterface;
}
