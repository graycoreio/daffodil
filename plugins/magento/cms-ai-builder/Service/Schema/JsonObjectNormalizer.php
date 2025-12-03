<?php

/**
 * Copyright © Graycore. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Schema;

/**
 * Normalizes JSON data to ensure empty objects are preserved as objects (not arrays)
 * when serialized back to JSON.
 *
 * PHP's json_decode with associative arrays converts {} to [], and json_encode([])
 * outputs [] instead of {}. This class fixes that for known object-type keys.
 */
class JsonObjectNormalizer
{
    /**
     * Keys that should be objects (not arrays) when empty.
     * These correspond to JSON Schema fields with type: object and additionalProperties.
     */
    private const OBJECT_KEYS = [
        'attributes',
        'base',
        'breakpoints',
        'styles',
        'properties',
    ];

    /**
     * Normalize data to ensure empty arrays for object-type keys become stdClass objects.
     *
     * @param mixed $data The data to normalize
     * @return mixed The normalized data
     */
    public function normalize(mixed $data): mixed
    {
        if (!is_array($data)) {
            return $data;
        }

        $result = [];
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                if (empty($value) && in_array($key, self::OBJECT_KEYS, true)) {
                    // Empty array for object-type key -> convert to stdClass
                    $result[$key] = (object)[];
                } else {
                    // Recurse into non-empty arrays
                    $result[$key] = $this->normalize($value);
                }
            } else {
                $result[$key] = $value;
            }
        }

        return $result;
    }
}
