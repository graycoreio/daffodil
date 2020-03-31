# Contact InMemory Driver

The In-Memory driver is for rapid development without a magento/shopify/etc backend. It will mock out the submission of a contact form and operate like a functional backend.

To set up the Contact InMemory Driver, import the `DaffContactInMemoryDriverModule.forRoot()` and the `HttpClientInMemoryWebApiModule.forRoot(MyInMemoryService)` (from Angular) into your `app.module`. 

```typescript
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DaffContactInMemoryDriverModule } from '@daffodil/contact/testing';
import { MyInMemoryService } from './in-memory-service/my-in-memory-service';

@NgModule({
  imports: [
    DaffContactInMemoryDriverModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(MyInMemoryService)
  ]
})
export class AppModule {}
```

You will still need to define your own `MyInMemoryService`. Follow the [Angular in memory web api docs](https://github.com/angular/in-memory-web-api) for more information.

MyInMemoryService example
```typescript
import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
	RequestInfo
} from 'angular-in-memory-web-api';

import { DaffContact } from '@daffodil/contact';
import { DaffInMemoryBackendContactService } from '@daffodil/contact/testing';

@Injectable({
  providedIn: 'root'
})
export class MyInMemoryService implements InMemoryDbService {
  constructor(
    private contactTestingService: DaffInMemoryBackendContactService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'contact') {
      return this.contactTestingService.post(reqInfo);
    }

    return undefined;
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'contact') {
      return this.contactTestingService.get(reqInfo);
    }
  }

  createDb(reqInfo: RequestInfo): MockDaffDatabase {
    return {
      ...this.contactTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  contact: DaffContact;
}

```

> Only one `daffodil/contact` driver should be imported into your App.Module at a time. To set up a driver configuration to switch between different backend drivers, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->
