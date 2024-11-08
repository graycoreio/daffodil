# Usage

## Headers
### Setup
First follow the [platforms guide](/libs/ssr/guides/platforms.md) to connect the app to the SSR platform in use. Then provide the browser header service in the app config like so:

app.config.ts
```ts
import { provideDaffSsrHeaderBrowserService } from '@daffodil/ssr'

const appConfig: ApplicationConfig = {
  providers: [
    ...,
    provideDaffSsrHeaderBrowserService()
  ]
}
```

This prevents server code from being loaded in the browser.

### Adding a Response Header
Inject the `DaffSsrHeaderService` and call `addResponseHeader` to add a header to the SSR document response.

app.component.ts
```ts
import { DaffSsrHeaderService, DAFF_SSR_HEADER_SERVICE } from '@daffodil/ssr'

@Component()
class AppComponent {
  constructor(
    @Inject(DAFF_SSR_HEADER_SERVICE) private headerService: DaffSsrHeaderService
  ) {
    this.headerService.addResponseHeader('Link', '<https://www.mydomain.com>; rel=preconnect');
  }
}
```

## Asset Preloading
Follow the [header setup](#setup) before using this feature.

Preloading certain important assets can boost the initial render of a page. By including [`Link` headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) on the SSR document response, the browser can load these assets while parsing the HTML.

Daffodil provides a `DaffSsrHeaderLinkAssetPreloader` service to assist this process. The following example demonstrates how to preload an asset that is needed for the initial render of a page.

```ts
import {
  DaffSsrHeaderLinkAssetPreloader,
  DaffSsrHeadersLinkPreloadAssetKind,
  DaffSsrHeadersLinkPreloadAssetPriority,
} from '@daffodil/ssr'

@Component()
class AppComponent {
  constructor(
    private assetPreloadService: DaffSsrHeaderLinkAssetPreloader
  ) {
    this.assetPreloadService.addHeader(
      '/asset/logo.png',
      DaffSsrHeadersLinkPreloadAssetKind.IMAGE,
      DaffSsrHeadersLinkPreloadAssetPriority.HIGH,
    );
  }
}
```