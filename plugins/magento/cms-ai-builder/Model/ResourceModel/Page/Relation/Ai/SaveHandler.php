<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Model\ResourceModel\Page\Relation\Ai;

use Magento\Framework\App\ResourceConnection;
use Magento\Framework\EntityManager\Operation\ExtensionInterface;

/**
 * Saves AI data to cms_page_ai table when a CMS page is saved
 */
class SaveHandler implements ExtensionInterface
{
    /**
     * @var ResourceConnection
     */
    private ResourceConnection $resourceConnection;

    /**
     * @param ResourceConnection $resourceConnection
     */
    public function __construct(ResourceConnection $resourceConnection)
    {
        $this->resourceConnection = $resourceConnection;
    }

    /**
     * Save AI data for a CMS page entity
     *
     * @param object $entity
     * @param array $arguments
     * @return object
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function execute($entity, $arguments = [])
    {
        if (!$entity->getId()) {
            return $entity;
        }

        $aiSchemaJson = $entity->getData('ai_schema_json');
        $aiConversationHistory = $entity->getData('ai_conversation_history');

        // Only save if there's AI data to save
        if ($aiSchemaJson === null && $aiConversationHistory === null) {
            return $entity;
        }

        $connection = $this->resourceConnection->getConnection();
        $tableName = $this->resourceConnection->getTableName('cms_page_ai');

        $data = ['page_id' => (int)$entity->getId()];

        if ($aiSchemaJson !== null) {
            $data['ai_schema_json'] = $aiSchemaJson;
        }

        if ($aiConversationHistory !== null) {
            $data['ai_conversation_history'] = $aiConversationHistory;
        }

        $connection->insertOnDuplicate($tableName, $data);

        return $entity;
    }
}
