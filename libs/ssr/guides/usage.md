# Usage

## Setting the Response Status Code
Inject the `DAFF_SSR_RESPONSE` and call `status` to set the status code on the SSR document response.

app.component.ts
```ts
import { DaffSsrResponse, DAFF_SSR_RESPONSE } from '@daffodil/ssr'

@Component()
class AppComponent {
  constructor(
    @Inject(DAFF_SSR_RESPONSE) private response: DaffSsrResponse
  ) {
    this.response.status(404);
  }
}
```

## Adding a Response Header
Inject the `DAFF_SSR_RESPONSE` and call `append` to add a header to the SSR document response.

app.component.ts
```ts
import { DaffSsrResponse, DAFF_SSR_RESPONSE } from '@daffodil/ssr'

@Component()
class AppComponent {
  constructor(
    @Inject(DAFF_SSR_RESPONSE) private response: DaffSsrResponse
  ) {
    this.response.append('Link', '<https://www.mydomain.com>; rel=preconnect');
  }
}
```

## Asset Preloading
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