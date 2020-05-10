export interface MagentoCartItemInput {
  quantity: number;
  sku: string;
}

export interface MagentoBundledCartItemInput {
	input: MagentoCartItemInput,
	options: MagentoBundledCartItemOption[];
}

export interface MagentoBundledCartItemOption {
	id: number;
	quantity: number;
	value: string[];
}

export interface MagentoConfigurableCartItemInput {
	parentSku: string;
	data: MagentoCartItemInput;
}
