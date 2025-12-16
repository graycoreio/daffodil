<?php

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Controller\Adminhtml\Renderer;

use Graycore\CmsAiBuilder\Helper\Config;
use Magento\Backend\App\Action;
use Magento\Backend\App\Action\Context;
use Magento\Framework\App\Action\HttpGetActionInterface;
use Magento\Framework\App\Action\HttpPostActionInterface;
use Magento\Framework\Controller\Result\RawFactory;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\View\Result\PageFactory;

/**
 * Admin controller for the standalone design renderer page.
 *
 * This page renders the design renderer in an iframe for CSS isolation,
 * allowing it to be used as a preview endpoint for the AI CMS Builder.
 *
 * Supports both GET and POST requests to accommodate two rendering modes:
 *
 * - **GET (CSR mode)**: The iframe loads this page via GET, which serves the
 *   Angular renderer app. The editor then communicates with the iframe via
 *   postMessage to send schema updates for client-side rendering.
 *
 * - **POST (SSR mode)**: The iframe submits the schema via POST form data.
 *   The server renders the schema to HTML using the configured renderer block,
 *   returning fully-rendered content without requiring JavaScript.
 *
 * The rendering mode is determined by configuration, but the controller accepts
 * both methods to ensure the page loads regardless of which mode is active.
 */
class Index extends Action implements HttpPostActionInterface, HttpGetActionInterface
{
    /**
     * ACL resource - requires CMS page permissions
     */
    public const ADMIN_RESOURCE = 'Magento_Cms::page';

    /**
     * @param Context $context
     * @param PageFactory $resultPageFactory
     * @param RawFactory $resultRawFactory
     * @param Config $config
     */
    public function __construct(
        Context $context,
        private readonly PageFactory $resultPageFactory,
        private readonly RawFactory $resultRawFactory,
        private readonly Config $config
    ) {
        parent::__construct($context);
    }

    /**
     * Execute action and render the renderer page
     */
    public function execute(): ResultInterface
    {
        if (!$this->config->isEnabled()) {
            $result = $this->resultRawFactory->create();
            $result->setContents('AI CMS Builder is not enabled');
            return $result;
        }

        return $this->resultPageFactory->create();
    }
}
