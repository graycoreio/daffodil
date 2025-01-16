import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartItemCountComponent } from './cart-item-count.component';

@Component({
  template: '<demo-cart-item-count [itemCount]="itemCountValue"></demo-cart-item-count>',
  standalone: false,
})
class WrapperComponent {
  itemCountValue = 0;
}

describe('CartItemCount', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: CartItemCountComponent;
  let element: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        CartItemCountComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    element = fixture.debugElement.query(By.css('demo-cart-item-count'));
    component = element.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when cartItem count is 1', () => {
    it('should set item count text to "Item"', () => {
      wrapper.itemCountValue = 1;

      fixture.detectChanges();

      expect(element.nativeElement.innerText).toEqual('1 Item');
    });
  });

  describe('when cartItem count is not 1', () => {
    it('should set item count text to "Items"', () => {
      wrapper.itemCountValue = 24;

      fixture.detectChanges();

      expect(element.nativeElement.innerText).toEqual('24 Items');
    });
  });
});
