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

import { DaffModalTitleDirective } from './modal-title.directive';

@Component({
  template: `
    <h2 daffModalTitle>Lorem Ipsum</h2>
  `,
  imports: [
    DaffModalTitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalTitleDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffModalTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-modal-title` to its host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-modal-title': true,
    }));
  });

  it('should define its own id', () => {
    expect(de.componentInstance.id).toEqual(de.componentInstance._uniqueRadioId);
  });
});
