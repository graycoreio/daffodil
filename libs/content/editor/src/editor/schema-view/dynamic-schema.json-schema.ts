export const dynamicSchemaJsonSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'DynamicSchema',
  oneOf: [
    {
      $ref: '#/definitions/TextSchema',
    },
    {
      $ref: '#/definitions/DynamicElementSchema',
    },
    {
      $ref: '#/definitions/DynamicComponentSchema',
    },
  ],
  definitions: {
    TextSchema: {
      type: 'object',
      required: ['type', 'text'],
      properties: {
        type: {
          type: 'string',
          const: 'textSchema',
        },
        text: {
          type: 'string',
        },
      },
      additionalProperties: false,
    },
    DynamicElementSchema: {
      type: 'object',
      required: ['type', 'element'],
      properties: {
        type: {
          type: 'string',
          const: 'elementSchema',
        },
        element: {
          type: 'string',
          enum: ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'a'],
        },
        attributes: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/DynamicSchema',
          },
        },
        styles: {
          type: 'object',
          properties: {
            base: {
              type: 'object',
              additionalProperties: {
                oneOf: [
                  { type: 'string' },
                  { type: 'number' },
                ],
              },
            },
            breakpoints: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                additionalProperties: {
                  oneOf: [
                    { type: 'string' },
                    { type: 'number' },
                  ],
                },
              },
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
    DynamicComponentSchema: {
      type: 'object',
      required: ['type', 'name', 'inputs'],
      properties: {
        type: {
          type: 'string',
          const: 'componentSchema',
        },
        name: {
          type: 'string',
        },
        inputs: {
          type: 'object',
          additionalProperties: true,
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/DynamicSchema',
          },
        },
      },
      additionalProperties: false,
    },
    DynamicSchema: {
      oneOf: [
        {
          $ref: '#/definitions/TextSchema',
        },
        {
          $ref: '#/definitions/DynamicElementSchema',
        },
        {
          $ref: '#/definitions/DynamicComponentSchema',
        },
      ],
    },
  },
};
