<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 * See LICENSE.txt for license details.
 */
namespace Graycore\CmsAiBuilder\Plugin;

use Graycore\CmsAiBuilder\Api\PageAiRepositoryInterface;
use Graycore\CmsAiBuilder\Model\PageAiFactory;
use Magento\Cms\Api\Data\PageInterface;
use Magento\Cms\Api\PageRepositoryInterface;
use Magento\Framework\Exception\NoSuchEntityException;
use Psr\Log\LoggerInterface;

/**
 * Plugin to load and save AI data with CMS pages
 */
class PageRepositoryPlugin
{
    /**
     * @var PageAiRepositoryInterface
     */
    private $pageAiRepository;

    /**
     * @var PageAiFactory
     */
    private $pageAiFactory;

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * @param PageAiRepositoryInterface $pageAiRepository
     * @param PageAiFactory $pageAiFactory
     * @param LoggerInterface $logger
     */
    public function __construct(
        PageAiRepositoryInterface $pageAiRepository,
        PageAiFactory $pageAiFactory,
        LoggerInterface $logger
    ) {
        $this->pageAiRepository = $pageAiRepository;
        $this->pageAiFactory = $pageAiFactory;
        $this->logger = $logger;
    }

    /**
     * Load AI data after page is retrieved
     *
     * @param PageRepositoryInterface $subject
     * @param PageInterface $page
     * @return PageInterface
     */
    public function afterGetById(
        PageRepositoryInterface $subject,
        PageInterface $page
    ) {
        if ($page->getId()) {
            try {
                $pageAi = $this->pageAiRepository->getByPageId($page->getId());
                $page->setData('ai_prompt', $pageAi->getAiPrompt());
                $page->setData('ai_schema_json', $pageAi->getAiSchemaJson());
                $page->setData('ai_conversation_history', $pageAi->getAiConversationHistory());
            } catch (NoSuchEntityException $e) {
                // No AI data exists yet, which is fine
            }
        }
        return $page;
    }

    /**
     * Save AI data after page is saved
     *
     * @param PageRepositoryInterface $subject
     * @param PageInterface $page
     * @return PageInterface
     */
    public function afterSave(
        PageRepositoryInterface $subject,
        PageInterface $page
    ) {
        if ($page->getId()) {
            try {
                // Check if AI data exists
                $pageAi = $this->pageAiRepository->getByPageId($page->getId());
            } catch (NoSuchEntityException $e) {
                // Create new AI data record
                $pageAi = $this->pageAiFactory->create();
                $pageAi->setPageId($page->getId());
            }

            // Update AI data if any of the fields are set
            $hasAiData = false;
            if ($page->getData('ai_prompt') !== null) {
                $pageAi->setAiPrompt($page->getData('ai_prompt'));
                $hasAiData = true;
            }
            if ($page->getData('ai_schema_json') !== null) {
                $pageAi->setAiSchemaJson($page->getData('ai_schema_json'));
                $hasAiData = true;
            }
            if ($page->getData('ai_conversation_history') !== null) {
                $pageAi->setAiConversationHistory($page->getData('ai_conversation_history'));
                $hasAiData = true;
            }

            // Only save if there's AI data
            if ($hasAiData) {
                try {
                    $this->pageAiRepository->save($pageAi);
                } catch (\Exception $e) {
                    $this->logger->error('Failed to save page AI data: ' . $e->getMessage());
                }
            }
        }
        return $page;
    }

    /**
     * Delete AI data after page is deleted
     *
     * @param PageRepositoryInterface $subject
     * @param bool $result
     * @param PageInterface $page
     * @return bool
     */
    public function afterDelete(
        PageRepositoryInterface $subject,
        $result,
        PageInterface $page
    ) {
        if ($result && $page->getId()) {
            try {
                $pageAi = $this->pageAiRepository->getByPageId($page->getId());
                $this->pageAiRepository->delete($pageAi);
            } catch (NoSuchEntityException $e) {
                // No AI data to delete
            } catch (\Exception $e) {
                $this->logger->error('Failed to delete page AI data: ' . $e->getMessage());
            }
        }
        return $result;
    }
}
