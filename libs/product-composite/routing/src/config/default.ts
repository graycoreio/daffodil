import { DaffBase64Service } from '@daffodil/core';

import { DaffProductCompositeRoutingConfig } from './interface';

/**
 * The default configuration for the {@link DaffProductCompositeRoutingConfig}.
 */
export const daffProductCompositeRoutingConfigDefaultFactory = (base64: DaffBase64Service): DaffProductCompositeRoutingConfig => ({
  compositeSelectionQueryParam: 'composite_selection',
  compositeSelectionQueryParamDecode: (queryParam: string) => JSON.parse(base64.decode(queryParam)),
});
