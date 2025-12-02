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
	 * Generate JSON Patch from user prompt using OpenAI
	 * @throws \Exception
	 */
	public function generate(string $prompt, string | null $schema, ?array $conversationHistory = null, ?int $storeId = null): GenerateSchemaResultInterface;
}
