import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffioWhyPwaExamplesComponent } from './why-pwa-examples.component';

@Component({
  template: `<daffio-why-pwa-examples></daffio-why-pwa-examples>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioWhyPwaExamplesComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioWhyPwaExamplesComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioWhyPwaExamplesComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-why-pwa-examples'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-why-pwa-examples" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-why-pwa-examples': true,
    }));
  });
});
