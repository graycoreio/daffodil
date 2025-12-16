<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Test\Unit;

use Graycore\CmsAiBuilder\Service\Schema\ComponentSchema;
use Graycore\CmsAiBuilder\Service\Schema\JsonPatchResponseSchema;
use Graycore\CmsAiBuilder\Test\Unit\Fixtures\DaffHeroComponentFixture;
use JsonSchema\Validator;
use PHPUnit\Framework\TestCase;

class LlmModelResponseSchemaTest extends TestCase
{
    /**
     * @var JsonPatchResponseSchema
     */
    private JsonPatchResponseSchema $schema;

    /**
     * @var Validator
     */
    private Validator $validator;

    public function setUp(): void
    {
        $componentSchema = new ComponentSchema([
            'DaffHeroComponentSchema' => new DaffHeroComponentFixture()
        ]);
        $this->schema = new JsonPatchResponseSchema($componentSchema);
        $this->validator = new Validator();
    }

    /**
     * Data provider for valid test responses
     *
     * @return array<string, array{name: string, response: array}>
     */
    public static function validResponseProvider(): array
    {
        $examplesDir = __DIR__ . '/example_schemas';

        return [
            'hero_component_patch' => [
                'name' => 'Hero Component Patch',
                'response' => self::loadSchema("{$examplesDir}/hero_component_patch.json")
            ],
            'text_replace_patch' => [
                'name' => 'Text Replace Patch',
                'response' => self::loadSchema("{$examplesDir}/text_replace_patch.json")
            ],
            'add_element_patch' => [
                'name' => 'Add Element Patch',
                'response' => self::loadSchema("{$examplesDir}/add_element_patch.json")
            ],
            'remove_patch' => [
                'name' => 'Remove Patch',
                'response' => self::loadSchema("{$examplesDir}/remove_patch.json")
            ]
        ];
    }

    /**
     * Data provider for invalid test responses that should fail validation
     *
     * @return array<string, array{name: string, response: array}>
     */
    public static function invalidResponseProvider(): array
    {
        $examplesDir = __DIR__ . '/example_schemas';

        return [
            'bad_component_patch_format' => [
                'name' => 'Bad Hero Patch Format - object with numeric keys instead of array',
                'response' => self::loadSchema("{$examplesDir}/bad_component_patch_format.json")
            ]
        ];
    }

    /**
     * Load a schema from a JSON file
     *
     * @param string $filePath
     * @return string
     */
    private static function loadSchema(string $filePath): string
    {
        if (!file_exists($filePath)) {
            throw new \Exception("Schema file not found: {$filePath}");
        }

        $json = file_get_contents($filePath);
        if ($json === false) {
            throw new \Exception("Failed to read schema file: {$filePath}");
        }

        return $json;
    }

    /**
     * Test valid responses pass validation
     *
     * @dataProvider validResponseProvider
     */
    public function testValidResponsesPassValidation(string $name, string $response): void
    {
        $responseObject = json_decode($response);
        $this->validator->validate($responseObject, $this->schema->getSchema()['schema']);

        if ($this->validator->isValid()) {
            $this->validator->reset();
            $this->assertTrue(true);
        } else {
            $errors = json_encode($this->validator->getErrors(), JSON_PRETTY_PRINT);
            $this->validator->reset();
            $this->fail("Content schema validation failed for: {$name}. Errors: $errors");
        }
    }

    /**
     * Test invalid responses fail validation
     *
     * @dataProvider invalidResponseProvider
     */
    public function testInvalidResponsesFailValidation(string $name, string $response): void
    {
        $responseObject = json_decode($response);
        $this->validator->validate($responseObject, $this->schema->getSchema()['schema']);

        if ($this->validator->isValid()) {
            $this->validator->reset();
            $this->fail("Schema validation should have failed for: {$name}");
        } else {
            $this->validator->reset();
            $this->assertTrue(true, "Correctly rejected invalid schema: {$name}");
        }
    }
}
