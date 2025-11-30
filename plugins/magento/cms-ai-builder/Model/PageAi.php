<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Model;

use Graycore\CmsAiBuilder\Api\Data\PageAiInterface;
use Magento\Framework\Model\AbstractModel;

/**
 * CMS Page AI Model
 */
class PageAi extends AbstractModel implements PageAiInterface
{
    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init(\Graycore\CmsAiBuilder\Model\ResourceModel\PageAi::class);
    }

    /**
     * @inheritDoc
     */
    public function getPageId()
    {
        return $this->getData(self::PAGE_ID);
    }

    /**
     * @inheritDoc
     */
    public function getAiPrompt()
    {
        return $this->getData(self::AI_PROMPT);
    }

    /**
     * @inheritDoc
     */
    public function getAiSchemaJson()
    {
        return $this->getData(self::AI_SCHEMA_JSON);
    }

    /**
     * @inheritDoc
     */
    public function getAiConversationHistory()
    {
        return $this->getData(self::AI_CONVERSATION_HISTORY);
    }

    /**
     * @inheritDoc
     */
    public function getCreatedAt()
    {
        return $this->getData(self::CREATED_AT);
    }

    /**
     * @inheritDoc
     */
    public function getUpdatedAt()
    {
        return $this->getData(self::UPDATED_AT);
    }

    /**
     * @inheritDoc
     */
    public function setPageId($pageId)
    {
        return $this->setData(self::PAGE_ID, $pageId);
    }

    /**
     * @inheritDoc
     */
    public function setAiPrompt($aiPrompt)
    {
        return $this->setData(self::AI_PROMPT, $aiPrompt);
    }

    /**
     * @inheritDoc
     */
    public function setAiSchemaJson($aiSchemaJson)
    {
        return $this->setData(self::AI_SCHEMA_JSON, $aiSchemaJson);
    }

    /**
     * @inheritDoc
     */
    public function setAiConversationHistory($aiConversationHistory)
    {
        return $this->setData(self::AI_CONVERSATION_HISTORY, $aiConversationHistory);
    }

    /**
     * @inheritDoc
     */
    public function setCreatedAt($createdAt)
    {
        return $this->setData(self::CREATED_AT, $createdAt);
    }

    /**
     * @inheritDoc
     */
    public function setUpdatedAt($updatedAt)
    {
        return $this->setData(self::UPDATED_AT, $updatedAt);
    }
}
