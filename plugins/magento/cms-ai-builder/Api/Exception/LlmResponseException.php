<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Exception;

use Magento\Framework\Exception\LocalizedException;

/**
 * Exception thrown when the LLM response is invalid or has unexpected structure
 */
class LlmResponseException extends LocalizedException
{
}
