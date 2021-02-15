import { DaffResolvableRoute } from '@daffodil/external-router';

import { MagentoResolution } from '../model/resolution';

export const transformResolutionToResolvableRoute = (
	resolution: MagentoResolution,
): DaffResolvableRoute => {
	return {
		url: resolution.relative_url,
		type: resolution.type,
	};
};
