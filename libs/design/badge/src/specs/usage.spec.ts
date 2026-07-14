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

import {
  DaffColor,
  DaffStatus,
} from '@daffodil/design';
import {
  DAFF_BADGE_COMPONENTS,
  DaffBadgeComponent,
} from '@daffodil/design/badge';

import { DaffBadgeSize } from '../badge/badge-sizable.directive';
import { DaffBadgeAppearance } from '../badge/badge-appearance';

@Component({
  template: `
    <daff-badge
      [status]="status()"
      [size]="size()"
      [appearance]="appearance()"
      [color]="color()">
        <div daffPrefix></div>
        Badge
    </daff-badge>
  `,
  imports: [
    DAFF_BADGE_COMPONENTS,
  ],
})
class WrapperComponent {
  status = signal<DaffStatus>(undefined);
  color = signal<DaffColor>(undefined);
  size = signal<DaffBadgeSize>(undefined);
  appearance = signal<DaffBadgeAppearance>(undefined);
}

describe('@daffodil/design/badge | DaffBadgeComponent | Usage', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffBadgeComponent;
  let badge: DebugElement;

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
    de = fixture.debugElement.query(By.css('daff-badge'));
    component = de.componentInstance;
    badge = fixture.debugElement.query(By.directive(DaffBadgeComponent));

    fixture.detectChanges();
  });

  describe('using the color property of a badge', () => {
    it('should take color as an input', () => {
      expect(badge.componentInstance.color).toEqual(wrapper.color());
    });

    it('should apply the corresponding color class', () => {
      wrapper.color.set('primary');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toBe(true);
    });
  });

  describe('using the appearance property of a badge', () => {
    it('should take appearance as an input', () => {
      wrapper.appearance.set('outlined');
      fixture.detectChanges();

      expect(component.appearance()).toEqual('outlined');
    });

    it('should apply the filled class when appearance is filled', () => {
      wrapper.appearance.set('filled');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('filled')).toBe(true);
      expect(de.nativeElement.classList.contains('outlined')).toBe(false);
    });

    it('should apply the outlined class when appearance is outlined', () => {
      wrapper.appearance.set('outlined');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('outlined')).toBe(true);
      expect(de.nativeElement.classList.contains('filled')).toBe(false);
    });

    it('should default to filled when appearance is undefined', () => {
      wrapper.appearance.set(undefined);
      fixture.detectChanges();

      expect(component.appearance()).toEqual('filled');
      expect(de.nativeElement.classList.contains('filled')).toBe(true);
      expect(de.nativeElement.classList.contains('outlined')).toBe(false);
    });
  });

  describe('using the size property of a badge', () => {
    it('should take size as an input', () => {
      expect(badge.componentInstance.size).toEqual(wrapper.size());
    });

    it('should apply the `.daff-sm` class when size is sm', () => {
      wrapper.size.set('sm');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-sm')).toBe(true);
    });

    it('should apply the `.daff-md` class when size is md', () => {
      wrapper.size.set('md');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-md')).toBe(true);
    });

    it('should apply the `.daff-lg` class when size is lg', () => {
      wrapper.size.set('lg');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-lg')).toBe(true);
    });
  });

  describe('using the status property of a badge', () => {
    it('should take status as an input', () => {
      expect(badge.componentInstance.status).toEqual(wrapper.status());
    });

    it('should apply the `.daff-warn` class when status is warn', () => {
      wrapper.status.set('warn');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-warn')).toBe(true);
    });

    it('should apply the `.daff-critical` class when status is critical', () => {
      wrapper.status.set('critical');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-critical')).toBe(true);
    });

    it('should apply the `.daff-info` class when status is info', () => {
      wrapper.status.set('info');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-info')).toBe(true);
    });

    it('should apply the `.daff-success` class when status is success', () => {
      wrapper.status.set('success');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-success')).toBe(true);
    });
  });
});
