import type { CodegenConfig } from '@graphql-codegen/cli';
import { join } from 'node:path';

const config: CodegenConfig = {
  schema: join(__dirname, 'shopify-storefront-schema.json'),
  // documents: [
  //   '../../../../../libs/*/driver/shopify/src/*/gql/**/*.ts',
  // ],
  generates: {
    [join(__dirname, 'shopify', 'src', 'codegen', 'generated-shopify-types.ts')]: {
      plugins: [
        'typescript',
        // 'typescript-operations',
        // 'typescript-apollo-angular',
      ],
      config: {
        typesPrefix: 'Shopify',
        declarationKind: 'interface',
      },
    },
  },
};
export default config;
