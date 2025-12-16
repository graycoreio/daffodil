<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service;

use Graycore\CmsAiBuilder\Api\Exception\PatchApplicationException;
use Graycore\CmsAiBuilder\Service\Schema\JsonObjectNormalizer;
use Magento\Framework\Phrase;
use Magento\Framework\Serialize\Serializer\Json;
use Rs\Json\Patch;

class PatchApplier
{
    /**
     * @param Json $json
     * @param JsonObjectNormalizer $normalizer
     */
    public function __construct(
        private readonly Json $json,
        private readonly JsonObjectNormalizer $normalizer
    ) {
    }

    /**
     * Apply JSON Patch operations to a schema
     *
     * @param string $schema The current schema as JSON string
     * @param array $patchOperations Array of JSON Patch operations
     * @return array The patched schema as an array
     * @throws PatchApplicationException
     */
    public function applyPatch(string $schema, array $patchOperations): array
    {
        try {
            if (!count($patchOperations)) {
                return $this->normalizer->normalize($this->json->unserialize($schema));
            }

            // Handle root replacement separately as Rs\Json\Patch doesn't support empty path
            if (count($patchOperations) === 1
                && isset($patchOperations[0]['op'], $patchOperations[0]['path'], $patchOperations[0]['value'])
                && $patchOperations[0]['op'] === 'replace'
                && $patchOperations[0]['path'] === ''
            ) {
                return $this->normalizer->normalize($patchOperations[0]['value']);
            }

            $patch = new Patch(
                $schema,
                json_encode($patchOperations)
            );

            $patchedSchemaJson = $patch->apply();
            return $this->normalizer->normalize($this->json->unserialize($patchedSchemaJson));
        } catch (\Exception $e) {
            throw new PatchApplicationException(
                new Phrase('Failed to apply patch: %1', [$e->getMessage()]),
                $e
            );
        }
    }
}
