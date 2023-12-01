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

import { DaffDropdownOptionDirective } from './dropdown-option.directive';

@Component({
  template: `
    <div daffDropdownOption>Content</div>
  `,
})
class WrapperComponent {}

describe('DaffDropdownOptionDirective', () => {
  let dropdownItemContent: DaffDropdownOptionDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffDropdownOptionDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffDropdownOption]'));
    dropdownItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(dropdownItemContent).toBeTruthy();
  });

  describe('[daffDropdownOption]', () => {
    it('should add a class of "daff-dropdown__option" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-dropdown__option': true,
      }));
    });
  });
});
