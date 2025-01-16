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

import { DaffioWhyPwaHeroComponent } from './why-pwa-hero.component';

@Component({
  template: `<daffio-why-pwa-hero></daffio-why-pwa-hero>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioWhyPwaHeroComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioWhyPwaHeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioWhyPwaHeroComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-why-pwa-hero'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-why-pwa-hero" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-why-pwa-hero': true,
    }));
  });
});
