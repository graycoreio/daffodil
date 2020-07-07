import { Dictionary } from '@ngrx/entity';

export interface DaffCompositeProductEntity {
	id: string;
	items: Dictionary<string>;
}
