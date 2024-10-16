# Storage
Daffodil abstracts the storage layer behind the `DaffPersistenceService` interface. A number of different services implement this interface and suit different use cases.

## Services
<!-- TODO: clarify use cases -->
| Service                    | Usage                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `DaffLocalStorageService`  | Uses `localStorage` to implement persistence. It's appropriate for browser environments.                                                   |
| `DaffMemoryStorageService` | Stores items in-memory. It's appropriate for testing environments or when true persistence is not desired.                                 |
| `DaffErrorStorageService`  | Always throws an error when it's invoked. It's appropriate for server environments such as SSR where storage mechanisms are not available. |
| `DaffNoopStorageService`   | Never performs any actions and always returns `undefined`.                                                                                 |

## Environment specific storage services
The storage service used can be configured by providing the `DaffPersistenceServiceToken` injection token. The following example demonstrates how to provide appropriate services based on the current environment.

<!-- TODO: find a better example -->
```ts
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  DaffPersistenceServiceToken,
  DaffLocalStorageService,
  DaffErrorStorageService
} from '@daffodil/core';

@NgModule({
  ...,
  providers: [
    {
      provide: DaffPersistenceServiceToken,
      deps: [PLATFORM_ID],
      useFactory: (platformId: string) => isPlatformBrowser(platformId)
        ? new DaffLocalStorageService(platformId)
        : new DaffErrorStorageService()
    }
  ]
})
class AppModule {}
```