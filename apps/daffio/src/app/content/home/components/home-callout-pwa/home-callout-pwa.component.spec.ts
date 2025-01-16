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

import { DaffioHomeCalloutPwaComponent } from './home-callout-pwa.component';

@Component({
  template: `<daffio-home-callout-pwa></daffio-home-callout-pwa>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioHomeCalloutPwaComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeCalloutPwaComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioHomeCalloutPwaComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-home-callout-pwa'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-home-callout-pwa" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-home-callout-pwa': true,
    }));
  });
});
