<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

use Magento\Framework\Serialize\Serializer\Json;
use Rs\Json\Patch;

class PatchApplier
{
    /**
     * @param Json $json
     */
    public function __construct(
        private readonly Json $json
    ) {
    }

    /**
     * Apply JSON Patch operations to a schema
     *
     * @param array $schema The current schema as an array
     * @param array $patchOperations Array of JSON Patch operations
     * @return array The patched schema as an array
     * @throws \Exception
     */
    public function applyPatch(string $schema, array $patchOperations): array
    {
        try {
            if(!count($patchOperations)) {
                return $this->json->unserialize($schema);
            }

            // Handle root replacement separately as Rs\Json\Patch doesn't support empty path
            if (count($patchOperations) === 1
                && isset($patchOperations[0]['op'], $patchOperations[0]['path'], $patchOperations[0]['value'])
                && $patchOperations[0]['op'] === 'replace'
                && $patchOperations[0]['path'] === ''
            ) {
                return $patchOperations[0]['value'];
            }

            $patch = new Patch(
                $schema,
                json_encode($patchOperations)
            );

            $patchedSchemaJson = $patch->apply();
            return $this->json->unserialize($patchedSchemaJson);
        } catch (\Exception $e) {
            throw new \Exception('Failed to apply patch: ' . $e->getMessage(), 0, $e);
        }
    }
}
