import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaffInMemoryDriverModule, DaffInMemoryService } from '@daffodil/driver/in-memory';


import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryService),
    DaffInMemoryDriverModule.forRoot({
      BASE_URL: environment.API_BASE
    })
  ]
})
export class InMemoryModule {}