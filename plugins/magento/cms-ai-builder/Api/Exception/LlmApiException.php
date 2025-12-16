<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Exception;

use Magento\Framework\Exception\LocalizedException;

/**
 * Exception thrown when the LLM API returns an error
 */
class LlmApiException extends LocalizedException
{
}
