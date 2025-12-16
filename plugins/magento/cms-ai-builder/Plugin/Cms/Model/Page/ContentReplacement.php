<?php

namespace Graycore\CmsAiBuilder\Plugin\Cms\Model\Page;

use Exception;
use Graycore\CmsAiBuilder\Service\AiContentRenderer;
use Magento\Cms\Model\Page;
use Magento\Framework\Exception\NoSuchEntityException;
use Psr\Log\LoggerInterface;

class ContentReplacement
{
    /**
     * @var AiContentRenderer
     */
    private $aiContentRenderer;

    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * @param AiContentRenderer $aiContentRenderer
     * @param LoggerInterface $logger
     */
    public function __construct(
        AiContentRenderer $aiContentRenderer,
        LoggerInterface   $logger
    ) {
        $this->aiContentRenderer = $aiContentRenderer;
        $this->logger = $logger;
    }

    /**
     * After get content
     *
     * @param Page $subject
     * @param string|null $result
     * @return string|null
     */
    public function afterGetContent(Page $subject, $result)
    {
        // If content is not empty, return it as is
        if (!empty(trim((string)$result))) {
            return $result;
        }

        try {
            $pageId = $subject->getId();
            if (!$pageId) {
                return $result;
            }

            $json = $subject->getAiSchemaJson();

            if ($json) {
                return $this->aiContentRenderer->render($json);
            }
        // phpcs:ignore Magento2.CodeAnalysis.EmptyBlock
        } catch (NoSuchEntityException $e) {
            // No AI content found for this page, ignore
        } catch (Exception $e) {
            $this->logger->error('Error rendering AI content for page ' . $subject->getId() . ': ' . $e->getMessage());
        }

        return $result;
    }
}
