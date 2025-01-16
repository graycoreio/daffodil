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

import { DaffButtonComponent } from './button.component';

@Component({
  template: `
    <a daff-button>Link Button</a>
    <button daff-button>Button</button>
  `,
  imports: [
    DaffButtonComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/button | DaffButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffButtonComponent;

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
    de = fixture.debugElement.query(By.css('[daff-button]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-button]'));
    });

    it('should add a class of `daff-button` to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));
    });
  });
});
