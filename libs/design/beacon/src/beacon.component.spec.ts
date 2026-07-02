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

import { DaffColor } from '@daffodil/design';

import { DaffBeaconComponent } from './beacon.component';
import { DaffBeaconSpeed } from './helpers/beacon-speed';

/**
 * Hosts a `<daff-beacon>` so each param can be driven through a binding, mirroring
 * how a real consumer wires it up.
 */
@Component({
  template: `<daff-beacon [color]="color" [size]="size" [speed]="speed"></daff-beacon>`,
  imports: [
    DaffBeaconComponent,
  ],
})
class WrapperComponent {
  color: DaffColor;
  size: string | undefined;
  speed: DaffBeaconSpeed | undefined;
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

  describe('the size param (DaffSizableDirective)', () => {
    it('should default to the "daff-sm" size class', () => {
      expect(de.classes['daff-sm']).toBeTrue();
    });

    it('should apply the matching daff-{size} class when set', () => {
      wrapper.size = 'lg';
      fixture.detectChanges();

      expect(de.classes['daff-lg']).toBeTrue();
      expect(de.classes['daff-sm']).toBeFalsy();
    });
  });

  describe('the color param', () => {
    it('should apply no color class by default, inheriting currentColor', () => {
      expect(de.classes['daff-primary']).toBeFalsy();
      expect(de.classes['daff-tertiary']).toBeFalsy();
    });

    it('should apply the matching daff-{color} class when set', () => {
      wrapper.color = 'tertiary';
      fixture.detectChanges();

      expect(de.classes['daff-tertiary']).toBeTrue();
    });
  });

  describe('the speed param', () => {
    it('should apply the ".slow" class when speed is "slow"', () => {
      wrapper.speed = 'slow';
      fixture.detectChanges();

      expect(de.classes['.slow']).toBeTrue();
      expect(de.classes['.normal']).toBeFalsy();
      expect(de.classes['.fast']).toBeFalsy();
    });

    it('should apply the ".fast" class when speed is "fast"', () => {
      wrapper.speed = 'fast';
      fixture.detectChanges();

      expect(de.classes['.fast']).toBeTrue();
      expect(de.classes['.normal']).toBeFalsy();
      expect(de.classes['.slow']).toBeFalsy();
    });

    it('should default to "normal"', () => {
      const beacon = TestBed.createComponent(DaffBeaconComponent);
      beacon.detectChanges();

      expect(beacon.componentInstance.speed()).toEqual('normal');
      expect(de.classes['.normal']).toBeTruthy();
    });
  });
});
