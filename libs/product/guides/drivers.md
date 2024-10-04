# Drivers

## In-memory web API
The in-memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the service calls to get products and return fake data. 

There are a few steps to wiring up the in-memory driver:

First, you'll need to create a layer between your app and the `DaffProductInMemoryDriverModule` so that the `DaffInMemoryBackendProductService` only ever receives product-related requests. This middle layer can just be an `in-memory-web-api` service that uses the `DaffInMemoryBackendProductService` to handle database creation for products and product get requests:

```ts
@Injectable({
  providedIn: 'root'
})
export class MyAppInMemoryService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryBackendProductService,
    private myAppTestingService: MyAppTestingService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
    if (collectionName === 'myAppCollectionName') {
      return myAppTestingService.post(reqInfo);
    }

    return undefined;
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.productTestingService.get(reqInfo);
    } else if (collectionName === 'myAppCollectionName') {
      return myAppTestingService.get(reqInfo);
    }
  }

  createDb(): MockMyAppDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...myAppCreatesOtherPartsOfTheMockDatabase()
    };
  }
}

export interface MockMyAppDatabase {
  products: DaffProduct[];
  myAppCollection: MyAppCollection[];
}
```

With this, you'll have all get requests for products handled by `@daffodil/product` and all other requests handled by your `MyAppTestingService`.

The only other thing you need to do is to make the product images in `@daffodil/product/assets` available to your application, because these are the images referenced in the mocked product data. You can do this by including assets from your `node_modules` directory to your application. For example, through angular-cli:

```json
{
  "projects": {
    "myApp": {
      **,
      "architect": {
        "build": {
          **,
          "options": {
            **,
            "assets": [
              **,
              {
                "glob": "**/*",
                "input": "node_modules/@daffodil/product/assets",
                "output": "assets/"
              }
            ]
          }
        }
      }
    }
  }
}
```

## Dynamic driver switching

You can configure a dynamic switch driver, allowing you to switch between multiple product drivers on the same site. This enables users to visit a single website URL and access product data from different databases without needing to follow additional links, providing a unified access point while maintaining flexibility. A demo can be found
[here](https://stackblitz.com/edit/stackblitz-starters-nwvydt?file=src%2Fmain.ts).