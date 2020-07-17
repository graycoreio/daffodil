import { Dictionary } from '@ngrx/entity';

import { DaffCompositeProductItemOption } from '../../models/composite-product-item';

export interface DaffCompositeProductEntity {
	id: string;
	items: Dictionary<DaffCompositeProductEntityItem>;
}

export interface DaffCompositeProductEntityItem {
	value: string;
	qty: number;
}
