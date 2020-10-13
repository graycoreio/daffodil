# Testing

`@daffodil/cart` provides a testing package accessible at `@daffodil/cart/testing`. This package provides model factories, facade mocks, and driver mocks to facilitate unit testing.

The following example demonstrates how to unit test a component using Daffodil model factories and the mock facade with the Jasmine testing framework and the `jasmine-marbles` library.

`cart.component.ts`
```typescript
import {
  DaffCartFacade,
  DaffCartCreate
} from '@daffodil/cart';

@Component({})
class CartComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private cartFacade: DaffCartFacade) {}

  ngOnInit() {
    this.loading$ = this.cartFacade.loading$;
  }

  createCart() {
    this.cartFacade.dispatch(new DaffCartCreate());
  }
}
```

`cart.component.spec.ts`
```typescript
import {
  DaffCartFacade,
  DaffCartCreate,
  DaffCartTestingModule,
  MockDaffCartFacade
} from '@daffodil/cart';

describe('CartComponent', () => {
  let mockCartFacade: MockDaffCartFacade;
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCartTestingModule // this provides the MockDaffCartFacade
      ]
    });

    mockCartFacade = TestBed.get(DaffCartFacade);

    spyOn(mockCartFacade, 'dispatch');

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('when createCart is called', () => {
    beforeEach(() => {
      component.createCart()
    })

    it('should dispatch cart creation', () => {
      const expected = new DaffCartCreate();
      expect(mockCartFacade.dispatch).toHaveBeenCalledWith(expected);
    });
  });

  describe('when the cart is loading', () => {
    beforeEach(() => {
      // mock facade fields are `BehaviorSubject`s
      // use the `next` method to mock stream values
      mockCartFacade.loading$.next(true);
    })

    it('should set loading$ to true', () => {
      const expected = hot('a', {a: true});
      expect(component.loading$).toBeObservable(expected);
    });
  });
});
```