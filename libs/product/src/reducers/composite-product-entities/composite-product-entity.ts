import { Dictionary } from '@ngrx/entity';

export interface DaffCompositeProductEntity {
	id: string;
	items: Dictionary<DaffCompositeProductEntityItem>;
}

export interface DaffCompositeProductEntityItem {
	value: string;
	qty: number;
}
