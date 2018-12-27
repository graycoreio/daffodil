import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as WebFont from 'webfontloader';
import * as AOS from 'aos';

WebFont.load({
  typekit: {
    id: 'hle3nby'
  }
});

AOS.init({
  once: 'true',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
