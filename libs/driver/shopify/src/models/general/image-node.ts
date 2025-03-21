import { Image } from '../../codegen/generated-shopify-types';

export interface ShopifyImageNode extends Omit<Image, 'src' | 'transformedSrc' | 'originalSrc'> {}
