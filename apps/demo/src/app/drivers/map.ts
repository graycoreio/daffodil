import { DemoInMemoryDriverModule } from './in-memory/in-memory.module';
import { DemoMagentoDriverModule } from './magento/magento.module';
import { DemoShopifyDriverModule } from './shopify/shopify.module';

/**
 * This map corresponds to the DemoDriverVariantEnum found in
 * the `environment.interface.ts`.
 *
 * This code is very precisely written to accommodate two things:
 *  1. [AOT-Compatability](https://angular.io/guide/aot-compiler#expression-syntax-limitations)
 *  2. [Foldability (for tree-shaking unused driver code).](https://angular.io/guide/aot-compiler#code-folding)
 *
 * Both of these constraints are very important for the final bundle-size that is delivered
 * to end-users. Be very careful if you have to refactor this code.
 *
 * You can see the corresponding usage of this code in the DemoAppModule.
 */
export const DemoDriverMap = [
	DemoInMemoryDriverModule,
	DemoMagentoDriverModule,
	DemoShopifyDriverModule,
];
