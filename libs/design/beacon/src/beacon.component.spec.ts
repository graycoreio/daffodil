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
  DaffColorableDirective,
  DaffStatus,
  DaffStatusableDirective,
} from '@daffodil/design';
import { DaffBeaconComponent } from '@daffodil/design/beacon';

import { DaffBeaconSpeed } from './helpers/beacon-speed';

@Component({
  template: `<daff-beacon [color]="color()" [size]="size()" [speed]="speed()" [status]="status()"></daff-beacon>`,
  imports: [
    DaffBeaconComponent,
  ],
})
class WrapperComponent {
  color = signal<DaffColor>(undefined);
  status = signal<DaffStatus>(undefined);
  size = signal<string | undefined>(undefined);
  speed = signal<DaffBeaconSpeed | undefined>(undefined);
}

describe('@daffodil/design/beacon | DaffBeaconComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffBeaconComponent;

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
    de = fixture.debugElement.query(By.css('daff-beacon'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the size param', () => {
    it('should default to "sm"', () => {
      expect(de.classes['daff-sm']).toBeTrue();
    });

    it('should apply the matching daff-{size} class when set', () => {
      wrapper.size.set('lg');
      fixture.detectChanges();

      expect(de.classes['daff-lg']).toBeTrue();
      expect(de.classes['daff-sm']).toBeFalsy();
    });
  });

  describe('the color param', () => {
    it('should not set a default color', () => {
      expect(de.injector.get(DaffColorableDirective).color).toBeFalsy();
    });

    it('should apply the matching daff-{color} class when set', () => {
      wrapper.color.set('tertiary');
      fixture.detectChanges();

      expect(de.classes['daff-tertiary']).toBeTrue();
    });
  });

  describe('the status param', () => {
    it('should not set a default status', () => {
      expect(de.injector.get(DaffStatusableDirective).status).toBeFalsy();
    });

    it('should apply the matching daff-{status} class when set', () => {
      wrapper.status.set('warn');
      fixture.detectChanges();

      expect(de.classes['daff-warn']).toBeTrue();
    });
  });

  describe('the speed param', () => {
    it('should apply the "slow" class when speed is "slow"', () => {
      wrapper.speed.set('slow');
      fixture.detectChanges();

      expect(de.classes['slow']).toBeTrue();
      expect(de.classes['normal']).toBeFalsy();
      expect(de.classes['fast']).toBeFalsy();
    });

    it('should apply the "fast" class when speed is "fast"', () => {
      wrapper.speed.set('fast');
      fixture.detectChanges();

      expect(de.classes['fast']).toBeTrue();
      expect(de.classes['normal']).toBeFalsy();
      expect(de.classes['slow']).toBeFalsy();
    });

    it('should default to "normal"', () => {
      const beacon = TestBed.createComponent(DaffBeaconComponent);
      beacon.detectChanges();

      expect(beacon.componentInstance.speed()).toEqual('normal');
      expect(beacon.debugElement.classes['normal']).toBeTrue();
    });
  });
});
