<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Api\Data;

/**
 * CMS Page AI Builder Data Interface
 * @api
 */
interface PageAiInterface
{
    /**
     * Constants for keys of data array
     */
    const PAGE_ID = 'page_id';
    const AI_PROMPT = 'ai_prompt';
    const AI_SCHEMA_JSON = 'ai_schema_json';
    const AI_CONVERSATION_HISTORY = 'ai_conversation_history';
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    /**
     * Get page ID
     *
     * @return int|null
     */
    public function getPageId();

    /**
     * Get AI prompt
     *
     * @return string|null
     */
    public function getAiPrompt();

    /**
     * Get AI schema JSON
     *
     * @return string|null
     */
    public function getAiSchemaJson();

    /**
     * Get AI conversation history
     *
     * @return string|null
     */
    public function getAiConversationHistory();

    /**
     * Get created at timestamp
     *
     * @return string|null
     */
    public function getCreatedAt();

    /**
     * Get updated at timestamp
     *
     * @return string|null
     */
    public function getUpdatedAt();

    /**
     * Set page ID
     *
     * @param int $pageId
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setPageId($pageId);

    /**
     * Set AI prompt
     *
     * @param string $aiPrompt
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setAiPrompt($aiPrompt);

    /**
     * Set AI schema JSON
     *
     * @param string $aiSchemaJson
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setAiSchemaJson($aiSchemaJson);

    /**
     * Set AI conversation history
     *
     * @param string $aiConversationHistory
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setAiConversationHistory($aiConversationHistory);

    /**
     * Set created at timestamp
     *
     * @param string $createdAt
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setCreatedAt($createdAt);

    /**
     * Set updated at timestamp
     *
     * @param string $updatedAt
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     */
    public function setUpdatedAt($updatedAt);
}
