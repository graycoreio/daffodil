import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { MagentoResolution } from '../model/resolution';

export const transformResolutionToResolvableUrl = (
	resolution: MagentoResolution,
): DaffExternallyResolvableUrl => {
	return {
		url: resolution.relative_url,
		type: resolution.type,
	};
};
