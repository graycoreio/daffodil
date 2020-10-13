# Extension

`@daffodil/cart` provides a number of extension mechanisms so that it can be customized to fit specific needs.

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

The following cart drivers support extensible fragments:
- Magento

### Magento

Provide the `DaffMagentoExtraCartFragments` to query additional fields on a Magento cart query. This applies to all of the driver calls that return a `DaffCart`, which is most of them.

The following example demonstrates providing a GraphQL document using the `graphql-tag` library.

```typescript
import gql from 'graphql-tag';
import {
  DaffMagentoExtraCartFragments
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
      useValue: extraCartFragment
    }
  ]
})
class AppModule {}
```
