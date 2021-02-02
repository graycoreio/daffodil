import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { DaffioAppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [DaffioAppComponent],
})
export class AppServerModule {}
