import { NgModule } from '@angular/core';

import { DaffPersistenceServiceToken, DaffServerErrorStorageService } from '@daffodil/core';

/**
 * A cart state module that should be loaded into SSR contexts.
 */
@NgModule({
	providers: [
		{
      provide: DaffPersistenceServiceToken,
      useExisting: DaffServerErrorStorageService
    }
	]
})
export class DaffCartStateServerModule { }
