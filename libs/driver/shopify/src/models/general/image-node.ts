import { ShopifyImage } from '../../codegen/generated-shopify-types';

export interface ShopifyImageNode extends Omit<ShopifyImage, 'src' | 'transformedSrc' | 'originalSrc'> {}
