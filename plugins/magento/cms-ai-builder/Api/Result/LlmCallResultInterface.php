<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Result;

interface LlmCallResultInterface
{
    /**
     * Get the reply message from the LLM
     *
     * @return string
     */
    public function getReply(): string;

    /**
     * Get the patch operations from the LLM
     *
     * @return array
     */
    public function getPatch(): array;
}
