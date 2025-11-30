<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

class GenerateSchemaResult
{
    /**
     * @param array $schema ViewSchema containing 'reply' and 'schema'
     * @param array $conversationHistory Array of ChatMessage objects
     */
    public function __construct(
        private readonly array $schema,
        private readonly array $conversationHistory
    ) {
    }

    /**
     * Get the ViewSchema (contains 'reply' and 'schema' keys)
     *
     * @return array
     */
    public function getSchema(): array
    {
        return $this->schema;
    }

    /**
     * Get the reply message from the AI
     *
     * @return string
     */
    public function getReply(): string
    {
        return $this->schema['reply'] ?? '';
    }

    /**
     * Get the DynamicSchema from the response
     *
     * @return array|null
     */
    public function getDynamicSchema(): ?array
    {
        return $this->schema['schema'] ?? null;
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
