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

import { DaffSelectSelectedOptionDirective } from './selected-option.directive';

@Component({
  template: `
    <div daffSelectSelectedOption>Content</div>
  `,
})
class WrapperComponent {}

describe('DaffSelectSelectedOptionDirective', () => {
  let selectItemContent: DaffSelectSelectedOptionDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffSelectSelectedOptionDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffSelectSelectedOption]'));
    selectItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(selectItemContent).toBeTruthy();
  });

  describe('[daffSelectSelectedOption]', () => {
    it('should add a class of "daff-select__selected-option" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-select__selected-option': true,
      }));
    });
  });
});
