import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as WebFont from 'webfontloader';

WebFont.load({
  typekit: {
    id: 'bvl8ycj'
  }
});

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
