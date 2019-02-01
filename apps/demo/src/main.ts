import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoModule } from './app/app.module';
import { environment } from './environments/environment';

import * as WebFont from 'webfontloader';

WebFont.load({
  typekit: {
    id: 'axs4dey'
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DemoModule)
  .catch(err => console.log(err));