# Storage

- [Storage](#storage)
  - [Services](#services)
    - [`DaffLocalStorageService`](#dafflocalstorageservice)
    - [`DaffMemoryStorageService`](#daffmemorystorageservice)
    - [`DaffErrorStorageService`](#dafferrorstorageservice)
    - [`DaffNoopStorageService`](#daffnoopstorageservice)
  - [Environment-Specific Storage Services](#environment-specific-storage-services)

Daffodil abstracts the storage layer behind the `DaffPersistenceService` interface. A number of different services implement this interface and suit different use cases.

## Services
<!-- TODO: clarify use cases -->

### `DaffLocalStorageService`

The `DaffLocalStorageService` utilizes `localStorage` to implement persistence. It is appropriate for browser environments.

### `DaffMemoryStorageService`

The `DaffMemoryStorageService` stores items in-memory. It is appropriate for testing environments or when true persistence is not desired.

### `DaffErrorStorageService`

The `DaffErrorStorageService` always throws an error when it is invoked. It is appropriate for server environments such as SSR where storage mechanisms are not available.

### `DaffNoopStorageService`

The `DaffNoopStorageService` never performs any actions and always returns `undefined`.

## Environment-Specific Storage Services

The storage service used can be configured by providing for the `DaffPersistenceServiceToken` injection token. The following example demonstrates how to provide appropriate services based on the current environment.

<!-- TODO: find a better example -->
```typescript
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
      factory: (platformId: string) => isPlatformBrowser(platformId)
        ? new DaffLocalStorageService(platformId)
        : new DaffErrorStorageService()
    }
  ]
})
class AppModule {}
```