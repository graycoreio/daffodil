<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Model\ResourceModel;

use Magento\Framework\Model\ResourceModel\Db\AbstractDb;
use Magento\Framework\Model\AbstractModel;

/**
 * CMS Page AI Resource Model
 */
class PageAi extends AbstractDb
{
    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('cms_page_ai', 'page_id');
    }

    /**
     * Save with UPSERT logic (INSERT ON DUPLICATE KEY UPDATE)
     *
     * @param AbstractModel $object
     * @return $this
     * @throws \Exception
     */
    public function save(AbstractModel $object)
    {
        $connection = $this->getConnection();
        $tableName = $this->getMainTable();

        $data = [
            'page_id' => $object->getPageId(),
            'ai_schema_json' => $object->getAiSchemaJson(),
            'ai_conversation_history' => $object->getAiConversationHistory(),
        ];

        // Remove null values to avoid overwriting with nulls
        $data = array_filter($data, function($value) {
            return $value !== null;
        });

        // Use INSERT ON DUPLICATE KEY UPDATE
        $connection->insertOnDuplicate($tableName, $data);

        // Load the saved data back into the object
        if ($object->getPageId()) {
            $this->load($object, $object->getPageId(), 'page_id');
        }

        return $this;
    }
}
