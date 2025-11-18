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

import { DaffioHomeCalloutCommerceComponent } from './home-callout-commerce.component';

@Component({
  template: `<daffio-home-callout-commerce></daffio-home-callout-commerce>`,
  imports: [DaffioHomeCalloutCommerceComponent],
})
class WrapperComponent {}

describe('DaffioHomeCalloutCommerceComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeCalloutCommerceComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WrapperComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-home-callout-commerce'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-home-callout-commerce" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-home-callout-commerce': true,
    }));
  });
});
