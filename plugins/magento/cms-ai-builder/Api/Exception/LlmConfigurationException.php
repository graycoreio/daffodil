<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Exception;

use Magento\Framework\Exception\LocalizedException;

/**
 * Exception thrown when LLM configuration is invalid or missing
 */
class LlmConfigurationException extends LocalizedException
{
}
