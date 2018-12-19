import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CartItemComponent } from './cart-item.component';

import { CartItem } from '@daffodil/core';
import { DaffCartItemFactory } from '@daffodil/core/testing';

const cartItemFactory = new DaffCartItemFactory();
const mockCartItem: CartItem = cartItemFactory.create();

@Component({template: '<fd-cart-item [item]="cartItemValue"></fd-cart-item>'})
class TestCartItemComponent {
  cartItemValue: CartItem;
}

@Component({selector: 'qty-dropdown', template: ''})
class MockQtyDropdownComponent {
  @Input() qty: number;
  @Input() id: number;
}

describe('CartItemComponent', () => {
  let component: TestCartItemComponent;
  let fixture: ComponentFixture<TestCartItemComponent>;
  let cartItemComponent;
  let qtyDropdownComponent: MockQtyDropdownComponent;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CartItemComponent,
        TestCartItemComponent,
        MockQtyDropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartItemComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    component.cartItemValue = mockCartItem;
    cartItemComponent = fixture.debugElement.query(By.css('fd-cart-item'));
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
