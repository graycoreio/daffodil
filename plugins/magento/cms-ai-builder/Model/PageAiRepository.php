<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Model;

use Graycore\CmsAiBuilder\Api\Data\PageAiInterface;
use Graycore\CmsAiBuilder\Api\PageAiRepositoryInterface;
use Graycore\CmsAiBuilder\Model\PageAiFactory;
use Graycore\CmsAiBuilder\Model\ResourceModel\PageAi as ResourcePageAi;
use Graycore\CmsAiBuilder\Model\ResourceModel\PageAi\CollectionFactory;
use Magento\Framework\Exception\CouldNotDeleteException;
use Magento\Framework\Exception\CouldNotSaveException;
use Magento\Framework\Exception\NoSuchEntityException;

/**
 * CMS Page AI Repository
 */
class PageAiRepository implements PageAiRepositoryInterface
{
    /**
     * @var ResourcePageAi
     */
    protected $resource;

    /**
     * @var PageAiFactory
     */
    protected $pageAiFactory;

    /**
     * @var CollectionFactory
     */
    protected $collectionFactory;

    /**
     * @param ResourcePageAi $resource
     * @param PageAiFactory $pageAiFactory
     * @param CollectionFactory $collectionFactory
     */
    public function __construct(
        ResourcePageAi $resource,
        PageAiFactory $pageAiFactory,
        CollectionFactory $collectionFactory
    ) {
        $this->resource = $resource;
        $this->pageAiFactory = $pageAiFactory;
        $this->collectionFactory = $collectionFactory;
    }

    /**
     * @inheritDoc
     */
    public function save(PageAiInterface $pageAi)
    {
        try {
            $this->resource->save($pageAi);
        } catch (\Exception $exception) {
            throw new CouldNotSaveException(
                __('Could not save the page AI data: %1', $exception->getMessage()),
                $exception
            );
        }
        return $pageAi;
    }

    /**
     * @inheritDoc
     */
    public function getByPageId($pageId)
    {
        $pageAi = $this->pageAiFactory->create();
        $this->resource->load($pageAi, $pageId);
        if (!$pageAi->getPageId()) {
            throw new NoSuchEntityException(
                __('The page AI data for page ID "%1" doesn\'t exist.', $pageId)
            );
        }
        return $pageAi;
    }

    /**
     * @inheritDoc
     */
    public function delete(PageAiInterface $pageAi)
    {
        try {
            $this->resource->delete($pageAi);
        } catch (\Exception $exception) {
            throw new CouldNotDeleteException(
                __('Could not delete the page AI data: %1', $exception->getMessage()),
                $exception
            );
        }
        return true;
    }

    /**
     * @inheritDoc
     */
    public function deleteByPageId($pageId)
    {
        return $this->delete($this->getByPageId($pageId));
    }
}
