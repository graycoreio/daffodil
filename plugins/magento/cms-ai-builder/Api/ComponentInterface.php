<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Api;

interface ComponentInterface
{
    /**
     * Get the JSON schema definition for this component
     *
     * @return array
     */
    public function getSchema(): array;
}
