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

import { DaffStatus } from '@daffodil/design';

import { DaffTagSize } from './tag-sizable.directive';
import { DaffTagComponent } from './tag.component';

@Component({
  template: `
    <daff-tag
      [dismissible]="dismissible"
      [disabled]="disabled"
      [status]="status"
      [size]="size"
      (closeTag)="onCloseTag()">
      <div>Test Tag</div>
    </daff-tag>
  `,
  imports: [
    DaffTagComponent,
  ],
})
class WrapperComponent {
  dismissible = false;
  disabled = false;
  status: DaffStatus;
  size: DaffTagSize;
  closeTagCalled = false;

  onCloseTag() {
    this.closeTagCalled = true;
  }
}

describe('@daffodil/design/tag | DaffTagComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffTagComponent;
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
    de = fixture.debugElement.query(By.css('daff-tag'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('dismissible property', () => {
    it('should take dismissible as an input', () => {
      expect(component.dismissible).toEqual(wrapper.dismissible);
    });

    it('should set dismissible to false by default', () => {
      expect(component.dismissible).toBeFalse();
    });

    it('should not show close button when dismissible is false', () => {
      wrapper.dismissible = false;
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      expect(closeButton).toBeFalsy();
    });

    it('should show close button when dismissible is true', () => {
      wrapper.dismissible = true;
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      expect(closeButton).toBeTruthy();
    });

    it('should emit closeTag event when close button is clicked', () => {
      wrapper.dismissible = true;
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      closeButton.nativeElement.click();
      expect(wrapper.closeTagCalled).toBe(true);
    });

    it('should not emit closeTag event when disabled and close button is clicked', () => {
      wrapper.dismissible = true;
      wrapper.disabled = true;
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      closeButton.nativeElement.click();
      expect(wrapper.closeTagCalled).toBe(false);
    });
  });

  describe('disabled property', () => {
    it('should take disabled as an input', () => {
      expect(component.disabled).toEqual(wrapper.disabled);
    });

    it('should set disabled to false by default', () => {
      expect(component.disabled).toBeFalse();
    });

    it('should have disabled property set when disabled is true', () => {
      wrapper.disabled = true;
      fixture.detectChanges();

      expect(component.disabled).toBe(true);
      expect(de.nativeElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should not have disabled attribute when disabled is false', () => {
      wrapper.disabled = false;
      fixture.detectChanges();

      expect(component.disabled).toBe(false);
      expect(de.nativeElement.getAttribute('aria-disabled')).toBe(null);
    });
  });

  describe('status property', () => {
    it('should accept warn status', () => {
      wrapper.status = 'warn';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-warn')).toBe(true);
    });

    it('should accept critical status', () => {
      wrapper.status = 'critical';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-critical')).toBe(true);
    });

    it('should accept info status', () => {
      wrapper.status = 'info';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-info')).toBe(true);
    });

    it('should accept success status', () => {
      wrapper.status = 'success';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-success')).toBe(true);
    });
  });

  describe('size property', () => {
    it('should accept sm size and apply daff-sm class', () => {
      wrapper.size = 'sm';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-sm')).toBe(true);
    });

    it('should accept md size and apply daff-md class', () => {
      wrapper.size = 'md';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-md')).toBe(true);
    });

    it('should accept lg size and apply daff-lg class', () => {
      wrapper.size = 'lg';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-lg')).toBe(true);
    });

    it('should default to md size and apply daff-md class', () => {
      expect(de.nativeElement.classList.contains('daff-md')).toBe(true);
    });
  });

  describe('content projection', () => {
    it('should project content inside the tag', () => {
      const projectedContent = de.query(By.css('.daff-tag__label'));
      expect(projectedContent.nativeElement.textContent.trim()).toBe('Test Tag');
    });
  });

  describe('host classes', () => {
    it('should have daff-tag class', () => {
      expect(de.nativeElement.classList.contains('daff-tag')).toBe(true);
    });

    it('should have dismissible class when dismissible is true', () => {
      wrapper.dismissible = true;
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('dismissible')).toBe(true);
    });

    it('should not have dismissible class when dismissible is false', () => {
      wrapper.dismissible = false;
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('dismissible')).toBe(false);
    });
  });
});
