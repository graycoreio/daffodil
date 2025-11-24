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

import { DaffSfCarouselItemDirective } from './carousel-item.directive';

@Component({
  template: `<div daffSfCarouselItem></div>`,
  imports: [
    DaffSfCarouselItemDirective,
  ],
})
class WrapperComponent {}

describe('DaffSfCarouselItemDirective', () => {
  let wrapper: WrapperComponent;
  let component: DaffSfCarouselItemDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('[daffSfCarouselItem]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-sf-carousel-item" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-sf-carousel-item': true,
    }));
  });
});
