import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';
import { DAFFIO_DOCS_PATH_TOKEN } from './docs/services/docs-path.token';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
  providers: [
    {
      provide: DAFFIO_DOCS_PATH_TOKEN,
      useValue: process.env.DAFFIO_DOCS_PATH || '',
    },
  ],
})
export class AppServerModule {}
