<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Api;

use Graycore\CmsAiBuilder\Api\Data\PageAiInterface;

/**
 * CMS Page AI CRUD interface
 * @api
 */
interface PageAiRepositoryInterface
{
    /**
     * Save page AI data
     *
     * @param \Graycore\CmsAiBuilder\Api\Data\PageAiInterface $pageAi
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function save(PageAiInterface $pageAi);

    /**
     * Retrieve page AI data by page ID
     *
     * @param int $pageId
     * @return \Graycore\CmsAiBuilder\Api\Data\PageAiInterface
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getByPageId($pageId);

    /**
     * Delete page AI data
     *
     * @param \Graycore\CmsAiBuilder\Api\Data\PageAiInterface $pageAi
     * @return bool true on success
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function delete(PageAiInterface $pageAi);

    /**
     * Delete page AI data by page ID
     *
     * @param int $pageId
     * @return bool true on success
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function deleteByPageId($pageId);
}
