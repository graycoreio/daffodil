# Extension

- [Extension](#extension)
  - [Custom Drivers](#custom-drivers)
  - [Generic Models](#generic-models)
  - [Extensible GraphQL Fragments](#extensible-graphql-fragments)
    - [Magento](#magento)

`@daffodil/cart` provides a number of extension mechanisms so that it can be customized to fit specific needs.

## Custom Drivers

If the packaged Daffodil drivers don't satisfy the required use cases, they can be overriden by providing custom drivers. Create a service that implements the interface corresponding to the driver you wish to override.

If custom behavior is not needed for all driver methods, unimplemented methods can be delegated to the original driver. The following example demonstrates overriding the `create` method of the `DaffCartDriver` while using Magento.

```typescript
import {
  DaffCartDriver,
  DaffMagentoCartService
} from '@daffodil/cart';

@Injectable({
  providedIn: 'root'
})
export class CustomMagentoCartService implements DaffCartServiceInterface {
  constructor(
    private cartDriver: DaffMagentoCartService,
  ) {}

  get(cartId: string): Observable<DaffCart> {
    return this.cartDriver.get(cartId);
  }

  create(): Observable<{id: string}> {
    // custom behavior
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.cartDriver.addToCart(productId, qty);
  }

  clear(cartId: string): Observable<Partial<DaffCart>> {
    return this.cartDriver.clear(cartId);
	}
}

@NgModule({
  ...,
  providers: [
    {
      provide: DaffCartDriver,
      useExisting: CustomMagentoCartService
    }
  ]
})
class AppModule {}
```

## Generic Models

All Daffodil layers can operate on generic extensions of vanilla Daffodil models. Custom models can therefore be used while retaining type safety. The following example illustrates customizing the cart model with the cart facade.

```typescript
import {
  DaffCartFacade,
  DaffCart
} from '@daffodil/cart';

interface CustomCart extends DaffCart {
  customField: string;
}

@Component({})
class CartComponent implements OnInit {
  cart$: Observable<CustomCart>;

  constructor(private cartFacade: DaffCartFacade<CustomCart>) {}

  ngOnInit() {
    // this.cartFacade.cart$ is of type CustomCart
    this.cart$ = this.cartFacade.cart$;
  }
}
```

## Extensible GraphQL Fragments

Arbitrary additional fields can be requested on the cart object. Inject a GraphQL document node containing fragments on the platform's cart type to define extra fields.

Only drivers that use GraphQL support extensible fragments because fragments are specific to GraphQL. The following cart drivers support extensible fragments:
- Magento

### Magento

Provide the `DaffMagentoExtraCartFragments` to query additional fields on a Magento cart query. This applies to all of the driver calls that return a `DaffCart`, which is most of them.

The additional fields are present on the untyped `extra_attributes` field.

The following example demonstrates providing a GraphQL document using the `graphql-tag` library.

```typescript
import gql from 'graphql-tag';
import {
  DaffMagentoExtraCartFragments,
  DaffCartFacade,
  DaffCartLoad,
  DaffCart
} from '@daffodil/cart';

const extraCartFragment = gql`
  fragment ExtraCartFields on Cart {
    field1 {
      amount
    }
    shipping_addresses {
      field2 {
        value
      }
    }
  }
`;

@NgModule({
  ...,
  providers: [
    {
      provide: DaffMagentoExtraCartFragments,
      useValue: extraCartFragment,
      multi: true
    }
  ]
})
class AppModule {}

@Component({})
class CartComponent implements OnInit {
  cart$: Observable<DaffCart>;
  field1$: Observable<{amount: number}>;
  field2$: Observable<{value: string}>;

  constructor(private cartFacade: DaffCartFacade) {}

  ngOnInit() {
    this.loadCart();
    this.cart$ = this.cartFacade.cart$;
    this.field1$ = this.cart$.pipe(
      map(cart => cart.extra_attributes?.field1)
    );
    this.field2$ = this.cart$.pipe(
      map(cart => cart.extra_attributes?.shipping_addresses?.[0]?.field2)
    );
  }

  private loadCart() {
    this.cartFacade.dispatch(new DaffCartLoad());
  }
}
```

> An extra cart fragment is defined and provided for the `DaffMagentoExtraCartFragments` injection token. The `CartComponent` then loads the cart on initialization, which will query the cart and include the extra injected cart fields in the request. The component maps the extra fields from `cart.extra_attributes` to local fields.
