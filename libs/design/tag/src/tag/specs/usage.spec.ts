/* eslint-disable quote-props */
import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffStatus } from '@daffodil/design';
import { DaffTagComponent } from '@daffodil/design/tag';

import { DaffTagSize } from '../tag-sizable.directive';

@Component({
  template: `
    <daff-tag
      [dismissible]="dismissible()"
      [disabled]="disabled()"
      [status]="status()"
      [size]="size()"
      (closeTag)="onCloseTag()">
        Tag
    </daff-tag>
  `,
  imports: [
    DaffTagComponent,
  ],
})
class WrapperComponent {
  dismissible = signal(false);
  disabled = signal(false);
  status = signal<DaffStatus>(undefined);
  size = signal<DaffTagSize>(undefined);
  closeTagCalled = false;

  onCloseTag() {
    this.closeTagCalled = true;
  }
}

describe('@daffodil/design/tag | DaffTagComponent | Usage', () => {
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
      expect(component.dismissible()).toEqual(wrapper.dismissible());
    });

    it('should not show close button when dismissible is false', () => {
      wrapper.dismissible.set(false);
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      expect(closeButton).toBeFalsy();
    });

    it('should show close button when dismissible is true', () => {
      wrapper.dismissible.set(true);
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      expect(closeButton).toBeTruthy();
    });

    it('should emit closeTag event when close button is clicked', () => {
      wrapper.dismissible.set(true);
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      closeButton.nativeElement.click();
      expect(wrapper.closeTagCalled).toBe(true);
    });

    it('should not emit closeTag event when disabled and close button is clicked', () => {
      wrapper.dismissible.set(true);
      wrapper.disabled.set(true);
      fixture.detectChanges();
      const closeButton = de.query(By.css('.daff-tag__close-icon'));
      closeButton.nativeElement.click();
      expect(wrapper.closeTagCalled).toBe(false);
    });
  });

  describe('disabled property', () => {
    it('should take disabled as an input', () => {
      expect(component.disabled).toEqual(wrapper.disabled());
    });

    it('should have disabled property set when disabled is true', () => {
      wrapper.disabled.set(true);
      fixture.detectChanges();

      expect(component.disabled).toBe(true);
      expect(de.nativeElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should not have disabled attribute when disabled is false', () => {
      wrapper.disabled.set(false);
      fixture.detectChanges();

      expect(component.disabled).toBe(false);
      expect(de.nativeElement.getAttribute('aria-disabled')).toBe(null);
    });
  });

  describe('status property', () => {
    it('should add a class of ".daff-info" to the host element if status is set to info', () => {
      wrapper.status.set('info');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-info': true,
      }));
    });

    it('should add a class of ".daff-warn" to the host element if status is set to warn', () => {
      wrapper.status.set('warn');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-warn': true,
      }));
    });

    it('should add a class of ".daff-critical" to the host element if status is set to critical', () => {
      wrapper.status.set('critical');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-critical': true,
      }));
    });

    it('should add a class of ".daff-success" to the host element if status is set to success', () => {
      wrapper.status.set('success');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-success': true,
      }));
    });
  });

  describe('size property', () => {
    it('should add a class of ".daff-sm" to the host element if size is set to info', () => {
      wrapper.size.set('sm');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-sm': true,
      }));
    });

    it('should add a class of ".daff-md" to the host element if size is set to md', () => {
      wrapper.size.set('md');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-md': true,
      }));
    });

    it('should add a class of ".daff-lg" to the host element if size is set to lg', () => {
      wrapper.size.set('lg');
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-lg': true,
      }));
    });
  });

  describe('content projection', () => {
    it('should project content inside the tag', () => {
      const projectedContent = de.query(By.css('.daff-tag__label'));
      expect(projectedContent.nativeElement.textContent.trim()).toBe('Tag');
    });
  });

  describe('host classes', () => {
    it('should have dismissible class when dismissible is true', () => {
      wrapper.dismissible.set(true);
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'dismissible': true,
      }));
    });

    it('should not have dismissible class when dismissible is false', () => {
      wrapper.dismissible.set(false);
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('dismissible')).toBe(false);
    });
  });
});
