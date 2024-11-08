# Express
Express is the default and recommended Angular SSR platform.

To get started, provide the request and response tokens in your common engine render:

`server.ts`
```ts
import {
  provideDaffSsrExpressRequest,
  provideDaffSsrExpressResponse,
} from '@daffodil/ssr/express'

// the rest of the file from https://angular.dev/guide/ssr#configure-server-side-rendering is omitted

server.get('*', (req, res, next) => {
  const {protocol, originalUrl, baseUrl, headers} = req;
  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [
        {provide: APP_BASE_HREF, useValue: req.baseUrl},
        provideDaffSsrExpressRequest(req),
        provideDaffSsrExpressResponse(res),
      ],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});
```

and then provide the header service in your server app config:

`app.config.server.ts`
```ts
import { provideDaffSsrHeaderExpressService } from '@daffodil/ssr/express'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideDaffSsrHeaderExpressService(),
  ]
};
```
