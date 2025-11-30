<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Model\Api;

use Graycore\CmsAiBuilder\Api\SchemaGeneratorInterface;
use Graycore\CmsAiBuilder\Service\SchemaGenerator;
use Magento\Framework\Serialize\Serializer\Json;

class SchemaGeneratorApi implements SchemaGeneratorInterface
{
    /**
     * @param SchemaGenerator $schemaGenerator
     * @param Json $json
     */
    public function __construct(
        private readonly SchemaGenerator $schemaGenerator,
        private readonly Json $json
    ) {
    }

    /**
     * @inheritDoc
     */
    public function generate(string $prompt): string
    {
        try {
            $schema = $this->schemaGenerator->generateSchema($prompt);
            return $this->json->serialize([
                'success' => true,
                'schema' => $schema
            ]);
        } catch (\Exception $e) {
            return $this->json->serialize([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
}
