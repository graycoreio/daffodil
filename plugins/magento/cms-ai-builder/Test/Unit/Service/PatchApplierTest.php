<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Test\Unit\Service;

use Graycore\CmsAiBuilder\Service\PatchApplier;
use Magento\Framework\Serialize\Serializer\Json;
use PHPUnit\Framework\TestCase;

class PatchApplierTest extends TestCase
{
    /**
     * @var PatchApplier
     */
    private PatchApplier $patchApplier;

    /**
     * Set up test dependencies
     */
    protected function setUp(): void
    {
        $json = new Json();
        $this->patchApplier = new PatchApplier($json);
    }

    /**
     * Data provider for file-based patch tests
     *
     * @return array<string, array{string, string, string}>
     */
    public static function patchTestDataProvider(): array
    {
        $testCases = [];
        $testDir = __DIR__;

        $directories = glob($testDir . '/*_test', GLOB_ONLYDIR);
        foreach ($directories as $dir) {
            $inputFile = $dir . '/input.json';
            $patchFile = $dir . '/patch.json';
            $outputFile = $dir . '/output.json';

            if (file_exists($inputFile) && file_exists($patchFile) && file_exists($outputFile)) {
                $testName = basename($dir);
                $testCases[$testName] = [
                    file_get_contents($inputFile),
                    file_get_contents($patchFile),
                    file_get_contents($outputFile)
                ];
            }
        }

        return $testCases;
    }

    /**
     * @dataProvider patchTestDataProvider
     */
    public function testApplyPatchFromFiles(string $input, string $patch, string $expectedOutput): void
    {
        $patchData = json_decode($patch, true);
        // Wrap single operation in array if needed
        if (isset($patchData['op'])) {
            $patchData = [$patchData];
        }

        $result = $this->patchApplier->applyPatch($input, $patchData);

        $expected = json_decode($expectedOutput, true);
        $this->assertEquals($expected, $result);
    }
}
