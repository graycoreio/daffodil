<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Test\Unit\Service\Schema;

use Graycore\CmsAiBuilder\Service\Schema\JsonObjectNormalizer;
use PHPUnit\Framework\TestCase;
use stdClass;

class JsonObjectNormalizerTest extends TestCase
{
    /**
     * @var JsonObjectNormalizer
     */
    private JsonObjectNormalizer $normalizer;

    protected function setUp(): void
    {
        $this->normalizer = new JsonObjectNormalizer();
    }

    public function testEmptyAttributesBecomesObject(): void
    {
        $input = [
            'type' => 'elementSchema',
            'element' => 'div',
            'attributes' => [],
        ];

        $result = $this->normalizer->normalize($input);

        $this->assertInstanceOf(stdClass::class, $result['attributes']);
        $this->assertEquals('{}', json_encode($result['attributes']));
    }

    public function testEmptyStylesBaseBecomesObject(): void
    {
        $input = [
            'styles' => [
                'base' => [],
                'breakpoints' => [],
            ],
        ];

        $result = $this->normalizer->normalize($input);

        $this->assertInstanceOf(stdClass::class, $result['styles']['base']);
        $this->assertInstanceOf(stdClass::class, $result['styles']['breakpoints']);
        $this->assertEquals('{"base":{},"breakpoints":{}}', json_encode($result['styles']));
    }

    public function testChildrenArrayRemainsArray(): void
    {
        $input = [
            'type' => 'elementSchema',
            'element' => 'div',
            'children' => [],
        ];

        $result = $this->normalizer->normalize($input);

        $this->assertIsArray($result['children']);
        $this->assertEquals('[]', json_encode($result['children']));
    }

    public function testNestedElementsAreNormalized(): void
    {
        $input = [
            'type' => 'elementSchema',
            'element' => 'div',
            'attributes' => [],
            'children' => [
                [
                    'type' => 'elementSchema',
                    'element' => 'span',
                    'attributes' => [],
                    'children' => [],
                    'styles' => [
                        'base' => [],
                        'breakpoints' => [],
                    ],
                ],
            ],
            'styles' => [
                'base' => [],
                'breakpoints' => [],
            ],
        ];

        $result = $this->normalizer->normalize($input);

        // Top level
        $this->assertInstanceOf(stdClass::class, $result['attributes']);
        $this->assertInstanceOf(stdClass::class, $result['styles']['base']);
        $this->assertInstanceOf(stdClass::class, $result['styles']['breakpoints']);

        // Nested element
        $child = $result['children'][0];
        $this->assertInstanceOf(stdClass::class, $child['attributes']);
        $this->assertInstanceOf(stdClass::class, $child['styles']['base']);
        $this->assertInstanceOf(stdClass::class, $child['styles']['breakpoints']);
        $this->assertIsArray($child['children']);
    }

    public function testNonEmptyObjectsRemainArrays(): void
    {
        $input = [
            'attributes' => ['class' => 'my-class'],
            'styles' => [
                'base' => ['margin' => '10px'],
                'breakpoints' => [],
            ],
        ];

        $result = $this->normalizer->normalize($input);

        // Non-empty objects remain as arrays (which serialize correctly)
        $this->assertIsArray($result['attributes']);
        $this->assertIsArray($result['styles']['base']);
        // Empty objects become stdClass
        $this->assertInstanceOf(stdClass::class, $result['styles']['breakpoints']);
    }

    public function testFullSchemaSerializesCorrectly(): void
    {
        $input = [
            'type' => 'elementSchema',
            'element' => 'div',
            'attributes' => [],
            'children' => [],
            'styles' => [
                'base' => [],
                'breakpoints' => [],
            ],
        ];

        $result = $this->normalizer->normalize($input);
        $json = json_encode($result);

        // phpcs:ignore Generic.Files.LineLength.TooLong
        $expected = '{"type":"elementSchema","element":"div","attributes":{},"children":[],"styles":{"base":{},"breakpoints":{}}}';
        $this->assertEquals($expected, $json);
    }
}
