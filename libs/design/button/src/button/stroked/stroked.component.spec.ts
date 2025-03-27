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

import { DaffStrokedButtonComponent } from './stroked.component';

@Component({
  template: `
    <a daff-stroked-button [elevated]="elevated">Stroked Link Button</a>
    <button daff-stroked-button [elevated]="elevated">Stroked Button</button>
  `,
  imports: [
    DaffStrokedButtonComponent,
  ],
})

class WrapperComponent {
  elevated = false;
}

describe('@daffodil/design/button | DaffStrokedButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffStrokedButtonComponent;

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
    de = fixture.debugElement.query(By.css('[daff-stroked-button]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-stroked-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-stroked-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-stroked-button]'));
    });

    it('should add a class of `daff-stroked-button` to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));
    });
  });

  describe('the elevated property', () => {
    it('should be able to take `elevated` as an input', () => {
      expect(component.elevated).toEqual(wrapper.elevated);
    });

    it('should add a class of `.elevated` to the host element if elevated is true', () => {
      wrapper.elevated = true;
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        elevated: true,
      }));
    });
  });
});
