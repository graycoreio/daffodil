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
     * Call the LLM model with schema and messages
     *
     * @param array $schema
     * @param array $messages
     * @return LlmCallResultInterface
     */
    public function call(array $schema, array $messages): LlmCallResultInterface;
}
