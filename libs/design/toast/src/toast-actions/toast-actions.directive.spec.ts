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

import { DaffToastActionsDirective } from './toast-actions.directive';

@Component({
  template: `
    <h3 daffToastActions>Lorem Ipsum</h3>
  `,
})
class WrapperComponent {}

describe('DaffToastActionsDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffToastActionsDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffToastActions]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffToastActions]', () => {
    it('should add a class of `daff-toast__actions` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-toast__actions')).toEqual(true);
    });
  });
});
