<?php
/**
 * Copyright © Graycore. All rights reserved.
 */
declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Service\Schema;

/**
 * JSON Schema for RFC 6902 JSON Patch response format
 */
class JsonPatchResponseSchema
{
    /**
     * @param ComponentSchema $componentSchema
     */
    public function __construct(
        private readonly ComponentSchema $componentSchema
    ) {
    }
    /**
     * Get the schema definitions for DaffContentSchema types
     *
     * @return array
     */
    public function getDaffContentSchemaDefinitions(): array
    {
        $componentSchemas = $this->componentSchema->getSchemas();
        $hasComponents = count($componentSchemas) > 0;

        $daffContentSchemaAnyOf = [
            ['$ref' => '#/$defs/DaffTextSchema'],
            ['$ref' => '#/$defs/DaffContentElementSchema']
        ];

        if ($hasComponents) {
            $daffContentSchemaAnyOf[] = ['$ref' => '#/$defs/DaffContentComponentSchema'];
        }

        $definitions = [
            'DaffContentSchema' => [
                'anyOf' => $daffContentSchemaAnyOf
            ],
            'DaffTextSchema' => [
                'type' => 'object',
                'properties' => [
                    'type' => ['type' => 'string', 'const' => 'textSchema'],
                    'text' => ['type' => 'string']
                ],
                'required' => ['type', 'text'],
                'additionalProperties' => false
            ],
            'DaffContentElementSchema' => [
                'type' => 'object',
                'properties' => [
                    'type' => ['type' => 'string', 'const' => 'elementSchema'],
                    'element' => ['type' => 'string'],
                    'attributes' => [
                        'type' => 'object',
                        'additionalProperties' => ['type' => 'string']
                    ],
                    'children' => [
                        'type' => 'array',
                        'items' => ['$ref' => '#/$defs/DaffContentSchema']
                    ],
                    'styles' => ['$ref' => '#/$defs/StylesObject']
                ],
                'required' => ['type', 'element', 'children', 'styles'],
                'additionalProperties' => false
            ]
        ];

        if ($hasComponents) {
            $definitions['DaffContentComponentSchema'] = [
                'anyOf' => array_map(
                    fn($schemaName) => ['$ref' => "#/\$defs/{$schemaName}"],
                    array_keys($componentSchemas)
                )
            ];
            $definitions = $definitions + $componentSchemas;
        }

        return $definitions;
    }

    /**
     * Get the JSON schema for structured outputs (RFC 6902 JSON Patch)
     *
     * @return array
     */
    public function getSchema(): array
    {
        return [
            'type' => 'json_schema',
            'name' => 'json_patch_response',
            'schema' => [
                'type' => 'object',
                '$defs' => array_merge(
                    $this->getDaffContentSchemaDefinitions(),
                    [
                        'CssStyleObject' => [
                            'type' => 'object',
                            'description' =>
                                'CSS styles as key-value pairs (e.g. {"margin": "10px", "display": "flex"}).',
                            'properties' => (object)[],
                            'required' => [],
                            'additionalProperties' => [
                                'anyOf' => [
                                    ['type' => 'string'],
                                    ['type' => 'number']
                                ]
                            ]
                        ],
                        'BreakpointsObject' => [
                            'type' => 'object',
                            'description' => 'Responsive styles keyed by media query condition.',
                            'properties' => (object)[],
                            'required' => [],
                            'additionalProperties' => ['$ref' => '#/$defs/CssStyleObject']
                        ],
                        'StylesObject' => [
                            'type' => 'object',
                            'description' => 'Element styles with base and responsive breakpoints.',
                            'properties' => [
                                'base' => ['$ref' => '#/$defs/CssStyleObject'],
                                'breakpoints' => ['$ref' => '#/$defs/BreakpointsObject']
                            ],
                            'required' => ['base', 'breakpoints'],
                            'additionalProperties' => false
                        ],
                        'JsonValue' => [
                            'anyOf' => [
                                ['type' => 'string'],
                                ['type' => 'number'],
                                ['type' => 'boolean'],
                                ['type' => 'null'],
                                ['$ref' => '#/$defs/DaffContentSchema'],
                                ['$ref' => '#/$defs/StylesObject']
                            ]
                        ]
                    ]
                ),
                'properties' => [
                    'reply' => [
                        'type' => 'string',
                        'description' => 'Brief explanation of changes made'
                    ],
                    'patch' => [
                        'type' => 'array',
                        'description' => 'Array of JSON Patch operations (RFC 6902)',
                        'items' => [
                            'type' => 'object',
                            'anyOf' => [
                                // Add
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'value', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'add'],
                                        'value' => ['$ref' => '#/$defs/JsonValue'],
                                        'path' => ['type' => 'string'],
                                    ],
                                ],
                                // Replace
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'value', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'replace'],
                                        'value' => ['$ref' => '#/$defs/JsonValue'],
                                        'path' => ['type' => 'string'],
                                    ],
                                ],
                                // Remove
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'remove'],
                                        'path' => ['type' => 'string'],
                                    ],
                                ],
                                // Copy
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'from', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'copy'],
                                        'from' => ['type' => 'string', 'minLength' => 1],
                                        'path' => ['type' => 'string'],
                                    ],
                                ],
                                // Move
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'from', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'move'],
                                        'from' => ['type' => 'string', 'minLength' => 1],
                                        'path' => ['type' => 'string'],
                                    ],
                                ],
                                // Test
                                [
                                    'additionalProperties' => false,
                                    'required' => ['op', 'value', 'path'],
                                    'properties' => [
                                        'op' => ['type' => 'string', 'const' => 'test'],
                                        'value' => ['$ref' => '#/$defs/JsonValue'],
                                        'path' => ['type' => 'string', 'minLength' => 1],
                                    ],
                                ],
                            ],
                        ],
                    ]
                ],
                'required' => ['reply', 'patch'],
                'additionalProperties' => false
            ]
        ];
    }
}
