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

import { DaffioWhyPwaStatsComponent } from './why-pwa-stats.component';

@Component({
  template: `<daffio-why-pwa-stats></daffio-why-pwa-stats>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioWhyPwaStatsComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioWhyPwaStatsComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioWhyPwaStatsComponent,
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
    de = fixture.debugElement.query(By.css('daffio-why-pwa-stats'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-why-pwa-stats" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-why-pwa-stats': true,
    }));
  });
});
