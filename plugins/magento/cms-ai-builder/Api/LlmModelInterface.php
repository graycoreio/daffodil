<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api;

use Graycore\CmsAiBuilder\Api\Result\LlmCallResultInterface;

interface LlmModelInterface
{
	/**
	 * Get the JSON schema definition for this component
	 */
	public function call(array $schema, array $messages): LlmCallResultInterface;
}
