<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Data;

use Graycore\CmsAiBuilder\Api\Result\LlmCallResultInterface;

class LlmCallResult implements LlmCallResultInterface
{
    /**
     * @param string $reply
     * @param array $patch
     */
    public function __construct(
        private readonly string $reply,
        private readonly array $patch
    ) {
    }

    /**
     * @inheritdoc
     */
    public function getReply(): string
    {
        return $this->reply;
    }

    /**
     * @inheritdoc
     */
    public function getPatch(): array
    {
        return $this->patch;
    }
}
