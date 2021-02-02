import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as WebFont from 'webfontloader';

import { DemoModule } from './app/app.module';
import { environment } from './environments/environment';


WebFont.load({
  typekit: {
    id: 'bvl8ycj',
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(DemoModule)
  .catch(err => console.log(err));
