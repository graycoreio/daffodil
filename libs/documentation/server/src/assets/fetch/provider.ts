import { DaffDocsAssetFetchService } from '@daffodil/documentation';

import { DaffDocsAssetFetchServerService } from './service';

export const provideDaffDocsServerFetchAssetService = () => ({
  provide: DaffDocsAssetFetchService,
  useExisting: DaffDocsAssetFetchServerService,
});
