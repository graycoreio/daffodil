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

import { DaffCardIconDirective } from './card-icon.directive';

@Component({
  template: `<div daffCardIcon></div>`,
  imports: [
    DaffCardIconDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardIconDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCardIcon]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardIcon]', () => {
    it('should add a class of "daff-card__icon" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__icon': true,
      }));
    });
  });
});
