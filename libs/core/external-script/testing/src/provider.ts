import { Provider } from '@angular/core';

import { DaffExternalScriptService } from '@daffodil/core/external-script';

import { DaffExternalScriptTestingService } from './external-script.service';

export const provideTestExternalScript: Provider = ({
  provide: DaffExternalScriptService,
  useExisting: DaffExternalScriptTestingService,
});
