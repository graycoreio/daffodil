import { DaffCategoryFilterType } from './filters/public_api';

export interface DaffCategoryFilterBase {
	label: string;
	name: string;
	type: DaffCategoryFilterType;
}
