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

import { DaffCardContentDirective } from './card-content.directive';

@Component({
  template: `<div daffCardContent></div>`,
  imports: [
    DaffCardContentDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardContentDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCardContent]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardContent]', () => {
    it('should add a class of "daff-card__content" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__content': true,
      }));
    });
  });
});
