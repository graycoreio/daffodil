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
 * Loads AI data from cms_page_ai table when a CMS page is loaded
 */
class ReadHandler implements ExtensionInterface
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
     * Load AI data for a CMS page entity
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

        $connection = $this->resourceConnection->getConnection();
        $tableName = $this->resourceConnection->getTableName('cms_page_ai');

        $select = $connection->select()
            ->from($tableName, ['ai_schema_json', 'ai_conversation_history'])
            ->where('page_id = ?', (int)$entity->getId());

        $result = $connection->fetchRow($select);

        if ($result) {
            $entity->setData('ai_schema_json', $result['ai_schema_json']);
            $entity->setData('ai_conversation_history', $result['ai_conversation_history']);
        }

        return $entity;
    }
}
