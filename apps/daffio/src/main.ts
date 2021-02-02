import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as WebFont from 'webfontloader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


WebFont.load({
  typekit: {
    id: 'bvl8ycj',
  },
});

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
