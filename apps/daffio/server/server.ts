import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine

import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';



import * as express from 'express';
import {join} from 'path';
import { readFileSync } from 'fs';


// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), './../../dist/apps/daffio');
const BROWSER_FOLDER = join(DIST_FOLDER, 'browser');

// Our index.html we'll use as our template
const template = readFileSync(join(BROWSER_FOLDER, 'index.html')).toString();

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

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

process.on('SIGINT', function() {
  process.exit();
});
