import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
// Express Engine

import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';



import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
export const app = express();

const BROWSER_FOLDER = join(__dirname, 'browser');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./../../../dist/apps/daffio/server/main');


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(BROWSER_FOLDER));

// Server static files from /browser
app.get('*.*', express.static(BROWSER_FOLDER));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(BROWSER_FOLDER, 'index.html'), { req });
});