<?php

/**
 * Copyright © Graycore, LLC. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api\Exception;

use Magento\Framework\Exception\LocalizedException;

/**
 * Exception thrown when JSON patch operations fail to apply
 */
class PatchApplicationException extends LocalizedException
{
}
