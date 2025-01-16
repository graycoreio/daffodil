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

import { DaffioWhyPwaSolutionComponent } from './why-pwa-solution.component';

@Component({
  template: `<daffio-why-pwa-solution></daffio-why-pwa-solution>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioWhyPwaSolutionComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioWhyPwaSolutionComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioWhyPwaSolutionComponent,
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
    de = fixture.debugElement.query(By.css('daffio-why-pwa-solution'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-why-pwa-solution" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-why-pwa-solution': true,
    }));
  });
});
