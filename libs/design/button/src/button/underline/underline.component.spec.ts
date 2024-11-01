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

import { DaffUnderlineButtonComponent } from './underline.component';

@Component({
  template: `
    <a daff-underline-button>Underline Link Button</a>
    <button daff-underline-button>Underline Button</button>
  `,
  standalone: true,
  imports: [
    DaffUnderlineButtonComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/button | DaffUnderlineButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffUnderlineButtonComponent;

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
    de = fixture.debugElement.query(By.css('[daff-underline-button]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-underline-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-underline-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-underline-button]'));
    });

    it('should add a class of `daff-underline-button` to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-underline-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-underline-button': true,
      }));
    });
  });
});
