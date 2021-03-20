export interface MagentoUrlResolver {
	relative_url: string;
	type: string;
	redirectCode: number;
	/**
	 * In v2.4.2 this became the standard id field
	 */
	entity_uid?: string;
	/**
	 * The original id field from Magento
	 */
	id?: number;
}
