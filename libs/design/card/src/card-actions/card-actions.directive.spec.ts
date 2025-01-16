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

import { DaffCardActionsDirective } from './card-actions.directive';

@Component({
  template: `<div daffCardActions></div>`,
  imports: [
    DaffCardActionsDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardActionsDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCardActions]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardActions]', () => {
    it('should add a class of "daff-card__actions" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__actions': true,
      }));
    });
  });
});
