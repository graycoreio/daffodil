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

import { DaffioWhyPwaOverviewComponent } from './why-pwa-overview.component';

@Component({
  template: `<daffio-why-pwa-overview></daffio-why-pwa-overview>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioWhyPwaOverviewComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioWhyPwaOverviewComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioWhyPwaOverviewComponent,
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
    de = fixture.debugElement.query(By.css('daffio-why-pwa-overview'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-why-pwa-overview" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-why-pwa-overview': true,
    }));
  });
});
