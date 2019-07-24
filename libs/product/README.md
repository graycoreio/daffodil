# @daffodil/product

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/product`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.


## Installation

```
npm install @daffodil/product
```

## Using the InMemory Driver

The InMemory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the service calls to get products and return fake data. There are a few steps to wiring up the DaffInMemory driver:

If you only plan on making serving calls for getting products, you can simply import `HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendProductService)` and `DaffProductInMemoryDriverModule.forRoot()` into your AppModule, and it will just work. If you need to make service calls that involve a cart or anything else, you'll need to create a middle layer between your app and the `DaffProductInMemoryDriverModule` so that the `DaffInMemoryBackendProductService` only ever receives product-related requests. This middle layer can just be an `in-memory-web-api` service that uses the `DaffInMemoryBackendProductService` to handle database creation for products and product get requests:

```

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

The only other thing you need to do is to make the product images in `@daffodil/product/assets` available to your application, because these are the image references used in the mocked product data.