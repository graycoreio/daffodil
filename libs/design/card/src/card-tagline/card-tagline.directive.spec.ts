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

import { DaffCardTaglineDirective } from './card-tagline.directive';

@Component({
  template: `<div daffCardTagline></div>`,
  imports: [
    DaffCardTaglineDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardTaglineDirective', () => {
  let wrapper: WrapperComponent;
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
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffCardTagline]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardTagline]', () => {
    it('should add a class of "daff-card__tagline" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__tagline': true,
      }));
    });
  });
});
