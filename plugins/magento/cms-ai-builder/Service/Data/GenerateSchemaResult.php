<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Data;

use Graycore\CmsAiBuilder\Api\Result\GenerateSchemaResultInterface;

class GenerateSchemaResult implements GenerateSchemaResultInterface
{
    /**
     * @param string $reply The reply from the model.
     * @param array $schema The schema.
     * @param array $conversationHistory Array of ChatMessage objects
     */
    public function __construct(
        private readonly string $reply,
        private readonly array $schema,
        private readonly array $conversationHistory
    ) {
    }

    /**
     * Get the reply message from the AI
     *
     * @return string
     */
    public function getReply(): string
    {
        return $this->reply ?? '';
    }

    /**
     * Get the DynamicSchema from the response
     *
     * @return array|null
     */
    public function getSchema(): ?array
    {
        return $this->schema ?? null;
    }

    /**
     * Get the updated conversation history (array of ChatMessage objects)
     *
     * @return array
     */
    public function getConversationHistory(): array
    {
        return $this->conversationHistory;
    }
}
