import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CartItemComponent } from './cart-item.component';

import { CartItem } from '@daffodil/core';
import { DaffCartItemFactory, DaffProductImageFactory } from '@daffodil/core/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

@Component({template: '<demo-cart-item [item]="cartItemValue"></demo-cart-item>'})
class TestCartItemWrapper {
  cartItemValue: CartItem;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: number;
  @Input() id: number;
}

describe('CartItemComponent', () => {
  let component: TestCartItemWrapper;
  let fixture: ComponentFixture<TestCartItemWrapper>;
  let cartItemComponent;
  let qtyDropdownComponent: MockQtyDropdownComponent;
  let router: Router;
  let cartItemFactory: DaffCartItemFactory;
  let productImageFactory: DaffProductImageFactory;
  let mockCartItem: CartItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffDriverTestingModule
      ],
      declarations: [
        CartItemComponent,
        TestCartItemWrapper,
        MockQtyDropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartItemWrapper);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    productImageFactory = TestBed.get(DaffProductImageFactory);
    mockCartItem = cartItemFactory.create({image: productImageFactory.create()});

    component.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('demo-cart-item'));
    qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown')).componentInstance;

    fixture.detectChanges();
  });
    
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can be passed a CartItem object', () => {
    expect(cartItemComponent.componentInstance.item).toEqual(mockCartItem);
  });

  it('renders a <qty-dropdown>', () => {
    expect(qtyDropdownComponent).not.toBeNull();
  });
  
  describe('on <qty-dropdown>', () => {
    
    it('sets qty', () => {
      expect(qtyDropdownComponent.qty).toEqual(mockCartItem.qty);
    });
    
    it('sets id', () => {
      expect(qtyDropdownComponent.id).toEqual(mockCartItem.item_id);
    });
  });

  describe('redirectToProduct', () => {
    
    it('should call router.navigateByUrl', () => {
      cartItemComponent.componentInstance.redirectToProduct();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/product/' + mockCartItem.product_id);
    });
  });

  describe('when cart-item image is clicked', () => {
    
    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
      fixture.debugElement.query(By.css('img')).nativeElement.click();

      expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
    });
  });

  describe('when cart-item__name is clicked', () => {
    
    it('should call redirectToProduct', () => {
      spyOn(cartItemComponent.componentInstance, 'redirectToProduct');
      fixture.debugElement.query(By.css('.cart-item__name')).nativeElement.click();
      
      expect(cartItemComponent.componentInstance.redirectToProduct).toHaveBeenCalled();
    });
  });
});
