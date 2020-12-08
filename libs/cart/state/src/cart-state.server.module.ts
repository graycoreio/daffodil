import { NgModule } from '@angular/core';

import { DaffPersistenceServiceToken, DaffServerErrorStorageService } from '@daffodil/core';

@NgModule({
	providers: [
		{
      provide: DaffPersistenceServiceToken,
      useExisting: DaffServerErrorStorageService
    }
	]
})
export class DaffCartStateServerModule { }
