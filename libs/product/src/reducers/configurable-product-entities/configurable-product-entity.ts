import { ID } from '@daffodil/core';

export interface DaffConfigurableProductEntity {
	id: ID;
	attributes: DaffConfigurableProductEntityAttribute[];
}

export interface DaffConfigurableProductEntityAttribute {
	code: string;
	value: string;
}
