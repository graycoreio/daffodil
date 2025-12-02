<?php
/**
 * Copyright © Graycore, LLC. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Test\Unit\Schema\JsonPatchResponseSchema;

use Graycore\CmsAiBuilder\Service\Schema\ComponentSchema;
use Graycore\CmsAiBuilder\Service\Schema\JsonPatchResponseSchema;
use PHPUnit\Framework\TestCase;

class JsonPatchResponseSchemaTest extends TestCase
{
    /**
     * Test that an empty component schema generates the expected JSON schema
     */
    public function testEmptyComponentSchemaGeneratesExpectedSchema(): void
    {
        $componentSchema = new ComponentSchema([]);
        $jsonPatchResponseSchema = new JsonPatchResponseSchema($componentSchema);

        $generatedSchema = $jsonPatchResponseSchema->getSchema();

        $expectedSchemaPath = __DIR__ . '/expected_schemas/empty_component_schema.json';
        $expectedSchemaJson = file_get_contents($expectedSchemaPath);

        // Compare as JSON strings to handle stdClass vs array differences
        $this->assertJsonStringEqualsJsonString(
            $expectedSchemaJson,
            json_encode($generatedSchema),
            'Generated schema does not match expected schema for empty component schema'
        );
    }
}