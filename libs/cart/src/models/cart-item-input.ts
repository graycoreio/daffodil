import { DaffProduct } from '@daffodil/product';

export enum DaffCartItemInputType {
	Simple = 'simple',
	Composite = 'composite',
	Configurable = 'configurable'
}

export interface DaffCartItemInput {
	type: DaffCartItemInputType;
  productId: DaffProduct['id'];
	qty: number;
}

export interface DaffSimpleCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Simple;
}

export interface DaffCompositeCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Composite;
	options: DaffCompositeCartItemOption[];
}

export interface DaffCompositeCartItemOption {
	code: string | number;
	quantity: number;
	value: string;
}

export interface DaffConfigurableCartItemInput extends DaffCartItemInput {
	type: DaffCartItemInputType.Configurable;
	variantId: string | number;
}
