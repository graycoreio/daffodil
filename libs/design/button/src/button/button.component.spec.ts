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

import {
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';
import { DaffLoadingIconComponent } from '@daffodil/design/loading-icon';

import { DaffButtonSize } from './button-sizable.directive';
import { DaffButtonComponent } from './button.component';

@Component({
  template: `
    <a daff-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Basic Link Button</a>
    <a daff-stroked-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Stroked Link Button</a>
    <a daff-raised-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Raised Link Button</a>
    <a daff-icon-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Icon Link Button</a>
    <a daff-underline-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Underline Link Button</a>
    <a daff-flat-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Flat Link Button</a>
    <button daff-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Basic Button</button>
    <button daff-stroked-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Stroked Button</button>
    <button daff-raised-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Raised Button</button>
    <button daff-icon-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Icon Button</button>
    <button daff-underline-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Underline Button</button>
    <button daff-flat-button [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex">Flat Button</button>
  `,
  standalone: true,
  imports: [
    DaffButtonComponent,
    DaffLoadingIconComponent,
  ],
})

class WrapperComponent {
  color: DaffPalette;
  size: DaffButtonSize;
  status: DaffStatus;
  loading = false;
  tabindex = 0;
}

describe('@daffodil/design/button | DaffButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffButtonComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
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

  describe('<daff-icon-button>', () => {
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

  describe('<daff-flat-button>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-flat-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-flat-button]'));
    });

    it('should add a class of `daff-flat-button` to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-flat-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-flat-button': true,
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
    it('should take size as an input', () => {
      wrapper.size = 'md';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
    });

    it('should set the default size to md', () => {
      expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
    });
  });

  it('should take status as an input', () => {
    wrapper.status = 'warn';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-warn')).toEqual(true);
  });

  it('should not set a default status', () => {
    expect(component.status).toBeFalsy();
  });

  describe('using the tabindex property of a button', () => {
    it('should be able to take `tabindex` as an input', () => {
      expect(component.tabindex).toEqual(wrapper.tabindex);
    });
  });

  describe('using the loading property of a button', () => {
    it('should be able to take `loading` as an input', () => {
      expect(component.loading).toEqual(wrapper.loading);
    });

    describe('when loading is set to true', () => {
      let loadingIcon: DaffLoadingIconComponent;

      beforeEach(() => {
        wrapper.loading = true;
        fixture.detectChanges();

        loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon')).componentInstance;
      });

      it('should show the <daff-loading-icon>', () => {
        expect(loadingIcon).toBeDefined();
      });

      it('should set the <daff-loading-icon>`s diameter to 24', () => {
        expect(loadingIcon.diameter).toBe(24);
      });
    });

    it('should show the `.daff-button__content` when loading is set to false', () => {
      wrapper.loading = false;
      fixture.detectChanges();

      const buttonContent = fixture.debugElement.query(By.css('.daff-button__content')).componentInstance;

      expect(buttonContent).toBeDefined();
    });
  });

  describe('when the button is disabled', () => {
    beforeEach(() => {
      component.disabled = true;
      fixture.detectChanges();
    });

    it('should add a disabled class to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-button--disabled')).toBeTruthy();
    });

    it('should set disabled to true', () => {
      expect(de.nativeElement.attributes['disabled'].value).toEqual('true');
    });

    it('should set aria-disabled to true', () => {
      expect(de.nativeElement.attributes['aria-disabled'].value).toEqual('true');
    });

    it('should set the tabindex to -1', () => {
      expect(de.nativeElement.attributes['tabindex'].value).toEqual('-1');
    });
  });
});
