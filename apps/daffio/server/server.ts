// eslint-disable-next-line import/no-unassigned-import
import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { existsSync } from 'node:fs';
import {
  join,
  dirname,
} from 'node:path';
import { fileURLToPath } from 'node:url';

import { AppServerModule } from '../src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const distFolder = join(__dirname, '../browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index.csr.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y',
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: baseUrl },
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Determine whether or not the file is the main file run via
 * `node path/to/server.js`
 *
 * If it is, likely you're running npm run serve:ssr and you want
 * to run the server locally.
 *
 * If it isn't, you're probably importing the module to use in a severless
 * environment and that command controls running the server.
 */
const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  run();
}


export * from '../src/main.server';
