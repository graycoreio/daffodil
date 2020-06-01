export interface DaffConfigurableProductEntity {
	id: string;
	attributes: DaffConfigurableProductEntityAttribute[];
}

export interface DaffConfigurableProductEntityAttribute {
	code: string;
	value: string;
}
