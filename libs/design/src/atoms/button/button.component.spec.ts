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

import { DaffPalette } from '../../core/colorable/public_api';
import { DaffStatus } from '../../core/statusable/statusable';
import {
  DaffButtonComponent,
  DaffButtonSize,
} from './button.component';

@Component({
  template: `
    <a daff-button [color]="color" [size]="size" [status]="status">Link Daff Button</a>
    <a daff-stroked-button [color]="color" [size]="size" [status]="status">Link Daff Stroked Button</a>
    <a daff-raised-button [color]="color" [size]="size" [status]="status">Link Daff Raised Button</a>
    <a daff-icon-button [color]="color" [size]="size" [status]="status">Link Daff Icon Button</a>
    <a daff-underline-button [color]="color" [size]="size" [status]="status">Link Daff Underline Button</a>
    <button daff-button [color]="color" [size]="size" [status]="status">Button Daff Button</button>
    <button daff-stroked-button [color]="color" [size]="size" [status]="status">Button Daff Stroked Button</button>
    <button daff-raised-button [color]="color" [size]="size" [status]="status">Button Daff Raised Button</button>
    <button daff-icon-button [color]="color" [size]="size" [status]="status">Button Daff Icon Button</button>
    <button daff-underline-button [color]="color" [size]="size" [status]="status">Button Daff Underline Button</button>
  `,
})

class WrapperComponent {
  color: DaffPalette;
  size: DaffButtonSize;
  status: DaffStatus;
}

describe('DaffButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffButtonComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffButtonComponent,
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

    it('should add a class of "daff-button" to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));
    });
  });

  describe('<daff-stroked-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-stroked-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-stroked-button]'));
    });

    it('should add a class of `daff-stroked-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));
    });
  });

  describe('<daff-raised-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-raised-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-raised-button]'));
    });

    it('should add a class of `daff-raised-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-button': true,
      }));
    });
  });

  describe('<daff-icon-butto>n', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-icon-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-icon-button]'));
    });

    it('should add a class of `daff-icon-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-icon-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-icon-button': true,
      }));
    });
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

  describe('using the color property of a button', () => {
    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });

    it('should add the class of the defined color to the host element', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });

  describe('using the size property of a button', () => {
    it('should add the class of the defined size to the host element', () => {
      wrapper.size = 'md';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
    });

    it('should set the default size to md', () => {
      expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
    });
  });

  describe('using the status property of a button', () => {
    it('should not set a default status', () => {
      expect(component.status).toBeFalsy();
    });

    it('should add the class of the defined status to the host element', () => {
      wrapper.status = 'warn';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-warn')).toEqual(true);
    });
  });
});
