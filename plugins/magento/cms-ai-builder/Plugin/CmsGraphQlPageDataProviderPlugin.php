<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Plugin;

use Magento\CmsGraphQl\Model\Resolver\DataProvider\Page as PageDataProvider;
use Magento\Framework\App\ResourceConnection;

/**
 * Plugin to add AI schema data to GraphQL page responses
 */
class CmsGraphQlPageDataProviderPlugin
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
     * Add ai_schema_json to page data returned by getDataByPageId
     *
     * @param PageDataProvider $subject
     * @param array $result
     * @return array
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterGetDataByPageId(PageDataProvider $subject, array $result): array
    {
        return $this->addAiSchemaToResult($result);
    }

    /**
     * Add ai_schema_json to page data returned by getDataByPageIdentifier
     *
     * @param PageDataProvider $subject
     * @param array $result
     * @return array
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function afterGetDataByPageIdentifier(PageDataProvider $subject, array $result): array
    {
        return $this->addAiSchemaToResult($result);
    }

    /**
     * Add ai_schema_json field to result array by loading from cms_page_ai table
     *
     * @param array $result
     * @return array
     */
    private function addAiSchemaToResult(array $result): array
    {
        if (!isset($result['page_id'])) {
            return $result;
        }

        $connection = $this->resourceConnection->getConnection();
        $tableName = $this->resourceConnection->getTableName('cms_page_ai');

        $select = $connection->select()
            ->from($tableName, ['ai_schema_json'])
            ->where('page_id = ?', (int)$result['page_id']);

        $aiSchemaJson = $connection->fetchOne($select);

        $result['ai_schema_json'] = $aiSchemaJson ?: null;

        return $result;
    }
}
