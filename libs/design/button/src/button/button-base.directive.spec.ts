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

import { DaffButtonBaseDirective } from './button-base.directive';
import { DaffButtonSize } from './button-sizable.directive';

@Component({
  template: `
		<div daffButtonBase [color]="color" [size]="size" [status]="status" [loading]="loading" [tabindex]="tabindex"></div>`,
  standalone: true,
  imports: [
    DaffButtonBaseDirective,
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

describe('@daffodil/design/button | DaffButtonBaseDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let directive: DaffButtonBaseDirective;

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
    de = fixture.debugElement.query(By.css('[daffButtonBase]'));
    directive = de.injector.get(DaffButtonBaseDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('using the color property of a button', () => {
    it('should not set a default color', () => {
      expect(directive.color).toBeFalsy();
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
    expect(directive.status).toBeFalsy();
  });

  describe('using the tabindex property of a button', () => {
    it('should be able to take `tabindex` as an input', () => {
      expect(directive.tabindex).toEqual(wrapper.tabindex);
    });
  });

  describe('using the loading property of a button', () => {
    it('should be able to take `loading` as an input', () => {
      expect(directive.loading).toEqual(wrapper.loading);
    });

    describe('when loading is set to true', () => {
      beforeEach(() => {
        wrapper.loading = true;
        fixture.detectChanges();

      });

      it('should show the <daff-loading-icon>', () => {
        const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

        expect(loadingIcon).toBeDefined();
      });
    });

    it('should show the `.daff-button__content` when loading is set to false', () => {
      wrapper.loading = false;
      fixture.detectChanges();

      const buttonContent = fixture.debugElement.query(By.css('.daff-button__content'));

      expect(buttonContent).toBeDefined();
    });
  });

  describe('when the button is disabled', () => {
    beforeEach(() => {
      directive.disabled = true;
      fixture.detectChanges();
    });

    it('should add a disabled class to the host element', () => {
      expect(de.nativeElement.classList.contains('disabled')).toBeTruthy();
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
