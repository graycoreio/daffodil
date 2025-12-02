<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Result;

interface GenerateSchemaResultInterface
{

    /**
     * Get the reply message from the AI
     *
     * @return string
     */
    public function getReply(): string;

    /**
     * Get the DynamicSchema from the response
     *
     * @return array|null
     */
    public function getSchema(): ?array;

    /**
     * Get the updated conversation history (array of ChatMessage objects)
     *
     * @return array
     */
    public function getConversationHistory(): array;
}
