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

import { DaffFormFieldActionDirective } from './action.directive';

@Component({
  template: `
    <div daffFormFieldAction>Title</div>
  `,
  imports: [
    DaffFormFieldActionDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design | DaffFormFieldActionDirective', () => {
  let accordionItemTitle: DaffFormFieldActionDirective;
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
    de = fixture.debugElement.query(By.css('[daffFormFieldAction]'));
    accordionItemTitle = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemTitle).toBeTruthy();
  });

  describe('[daffFormFieldAction]', () => {
    it('should add a class of "daff-form-field-action" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-form-field-action': true,
      }));
    });
  });
});
