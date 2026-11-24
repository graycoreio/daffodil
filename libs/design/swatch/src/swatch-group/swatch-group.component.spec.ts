import {
  Component,
  DebugElement,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_SWATCH_COMPONENTS,
  DaffSwatchGroupComponent,
  DaffSwatchShape,
  DaffSwatchSize,
} from '@daffodil/design/swatch';

@Component({
  template: `
    <daff-swatch-group aria-label="Color" [(value)]="value" [size]="size()" [shape]="shape()" [disabled]="disabled()">
      <daff-swatch value="red" color="#d32f2f" aria-label="Red"></daff-swatch>
      <daff-swatch value="green" color="#388e3c" aria-label="Green" [disabled]="true"></daff-swatch>
      <daff-swatch value="blue" color="#1976d2" aria-label="Blue"></daff-swatch>
      <daff-swatch value="black" color="#000" aria-label="Black"></daff-swatch>
    </daff-swatch-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WrapperComponent {
  value = signal<string>(null);
  size = signal<DaffSwatchSize>(undefined);
  shape = signal<DaffSwatchShape>('round');
  disabled = signal(false);
}

describe('@daffodil/design/swatch | DaffSwatchGroupComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffSwatchGroupComponent;
  let swatches: DebugElement[];

  const keydown = (swatch: DebugElement, key: string) => {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    swatch.nativeElement.dispatchEvent(event);
    fixture.detectChanges();
    return event;
  };

  const tabIndexes = () => swatches.map((swatch) => swatch.attributes['tabindex']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-swatch-group'));
    component = de.componentInstance;

    fixture.detectChanges();
    swatches = fixture.debugElement.queryAll(By.css('daff-swatch'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-swatch-group" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-swatch-group': true,
    }));
  });

  it('should have a role of "radiogroup"', () => {
    expect(de.attributes['role']).toEqual('radiogroup');
  });

  describe('size property', () => {
    it('should default to "md"', () => {
      expect(de.classes['daff-md']).toBeTrue();
    });

    it('should add a class of "daff-sm" to the host element when size="sm"', () => {
      wrapper.size.set('sm');
      fixture.detectChanges();

      expect(de.classes['daff-sm']).toBeTrue();
    });

    it('should add a class of "daff-lg" to the host element when size="lg"', () => {
      wrapper.size.set('lg');
      fixture.detectChanges();

      expect(de.classes['daff-lg']).toBeTrue();
    });
  });

  describe('shape property', () => {
    it('should add a class of "daff-round" to the host element by default', () => {
      expect(de.classes['daff-round']).toBeTrue();
      expect(de.classes['daff-square']).toBeFalsy();
    });

    it('should make the swatches round by default', () => {
      expect(getComputedStyle(swatches[0].nativeElement).borderRadius).toEqual('50%');
    });

    describe('when shape="square"', () => {
      beforeEach(() => {
        wrapper.shape.set('square');
        fixture.detectChanges();
      });

      it('should add a class of "daff-square" to the host element', () => {
        expect(de.classes['daff-square']).toBeTrue();
        expect(de.classes['daff-round']).toBeFalsy();
      });

      it('should give the swatches slightly rounded corners', () => {
        expect(getComputedStyle(swatches[0].nativeElement).borderRadius).toEqual('4px');
      });
    });
  });

  describe('value property', () => {
    it('should select the swatch with the matching value', () => {
      wrapper.value.set('blue');
      fixture.detectChanges();

      expect(swatches[2].classes['daff-selected']).toBeTrue();
      expect(swatches.filter((swatch) => swatch.classes['daff-selected']).length).toEqual(1);
    });
  });

  describe('tab index', () => {
    it('should make only the first enabled swatch tabbable when nothing is selected', () => {
      expect(tabIndexes()).toEqual(['0', '-1', '-1', '-1']);
    });

    it('should make only the selected swatch tabbable', () => {
      wrapper.value.set('blue');
      fixture.detectChanges();

      expect(tabIndexes()).toEqual(['-1', '-1', '0', '-1']);
    });

    it('should move the tab stop to the swatch selected with arrow keys', () => {
      wrapper.value.set('blue');
      fixture.detectChanges();
      keydown(swatches[2], 'ArrowRight');

      expect(tabIndexes()).toEqual(['-1', '-1', '-1', '0']);
    });
  });

  describe('keyboard interactions', () => {
    it('should select and focus the next enabled swatch on ArrowRight, skipping disabled swatches', () => {
      const event = keydown(swatches[0], 'ArrowRight');

      expect(wrapper.value()).toEqual('blue');
      expect(document.activeElement).toBe(swatches[2].nativeElement);
      expect(event.defaultPrevented).toBeTrue();
    });

    it('should select the next enabled swatch on ArrowDown', () => {
      keydown(swatches[2], 'ArrowDown');

      expect(wrapper.value()).toEqual('black');
    });

    it('should select the previous enabled swatch on ArrowLeft, skipping disabled swatches', () => {
      keydown(swatches[2], 'ArrowLeft');

      expect(wrapper.value()).toEqual('red');
    });

    it('should select the previous enabled swatch on ArrowUp', () => {
      keydown(swatches[3], 'ArrowUp');

      expect(wrapper.value()).toEqual('blue');
    });

    it('should wrap to the first swatch from the last swatch', () => {
      keydown(swatches[3], 'ArrowRight');

      expect(wrapper.value()).toEqual('red');
    });

    it('should wrap to the last swatch from the first swatch', () => {
      keydown(swatches[0], 'ArrowLeft');

      expect(wrapper.value()).toEqual('black');
    });

    it('should select the first enabled swatch on Home', () => {
      keydown(swatches[3], 'Home');

      expect(wrapper.value()).toEqual('red');
    });

    it('should select the last enabled swatch on End', () => {
      keydown(swatches[0], 'End');

      expect(wrapper.value()).toEqual('black');
    });

    it('should ignore other keys', () => {
      const event = keydown(swatches[0], 'a');

      expect(wrapper.value()).toBeNull();
      expect(event.defaultPrevented).toBeFalse();
    });
  });

  describe('when it is disabled', () => {
    beforeEach(() => {
      wrapper.disabled.set(true);
      fixture.detectChanges();
    });

    it('should set aria-disabled', () => {
      expect(de.attributes['aria-disabled']).toEqual('true');
    });

    it('should disable every swatch', () => {
      expect(swatches.every((swatch) => swatch.classes['daff-disabled'])).toBeTrue();
    });

    it('should remove every swatch from the tab order', () => {
      expect(tabIndexes()).toEqual(['-1', '-1', '-1', '-1']);
    });

    it('should not select a swatch when clicked', () => {
      swatches[0].nativeElement.click();
      fixture.detectChanges();

      expect(wrapper.value()).toBeNull();
    });
  });
});
