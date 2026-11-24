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
  DaffSwatchComponent,
} from '@daffodil/design/swatch';

@Component({
  template: `
    <daff-swatch-group aria-label="Color" [(value)]="value">
      <daff-swatch value="red" [color]="color()" [disabled]="disabled()" aria-label="Red"></daff-swatch>
      <daff-swatch value="blue" color="#1976d2" aria-label="Blue"></daff-swatch>
    </daff-swatch-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WrapperComponent {
  value = signal<string>(null);
  color = signal('#d32f2f');
  disabled = signal(false);
}

@Component({
  template: `<daff-swatch value="red"></daff-swatch>`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WithoutSetWrapperComponent {}

describe('@daffodil/design/swatch | DaffSwatchComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffSwatchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        WithoutSetWrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('daff-swatch'))[0];
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-swatch" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-swatch': true,
    }));
  });

  it('should have a role of "radio"', () => {
    expect(de.attributes['role']).toEqual('radio');
  });

  it('should throw an error when it is not used inside of a swatch group', () => {
    expect(() => TestBed.createComponent(WithoutSetWrapperComponent)).toThrowError(
      'DaffSwatchComponent needs to be used inside of a DaffSwatchGroupComponent.',
    );
  });

  describe('color property', () => {
    it('should set the background of the swatch fill', () => {
      const fill = de.query(By.css('.daff-swatch__fill')).nativeElement;

      expect(fill.style.background).toContain('rgb(211, 47, 47)');
    });

    it('should not set a background when color is not set', () => {
      wrapper.color.set(undefined);
      fixture.detectChanges();

      const fill = de.query(By.css('.daff-swatch__fill')).nativeElement;

      expect(fill.style.background).toEqual('');
    });
  });

  describe('when it is clicked', () => {
    beforeEach(() => {
      de.nativeElement.click();
      fixture.detectChanges();
    });

    it('should set the value of the swatch group', () => {
      expect(wrapper.value()).toEqual('red');
    });

    it('should be selected', () => {
      expect(component.selected()).toBeTrue();
      expect(de.classes['daff-selected']).toBeTrue();
      expect(de.attributes['aria-checked']).toEqual('true');
    });
  });

  it('should be reachable with the tab key when it is the first swatch and nothing is selected', () => {
    expect(de.attributes['tabindex']).toEqual('0');
  });

  it('should not be reachable with the tab key when another swatch is selected', () => {
    wrapper.value.set('blue');
    fixture.detectChanges();

    expect(de.attributes['tabindex']).toEqual('-1');
  });

  it('should be focusable', () => {
    de.nativeElement.focus();

    expect(document.activeElement).toBe(de.nativeElement);
  });

  it('should set aria-checked to false when it is not selected', () => {
    expect(de.attributes['aria-checked']).toEqual('false');
  });

  it('should select the swatch when space is pressed', () => {
    de.triggerEventHandler('keydown.space', new KeyboardEvent('keydown', { key: ' ' }));
    fixture.detectChanges();

    expect(wrapper.value()).toEqual('red');
  });

  describe('when it is disabled', () => {
    beforeEach(() => {
      wrapper.disabled.set(true);
      fixture.detectChanges();
    });

    it('should add a class of "daff-disabled" to the host element', () => {
      expect(de.classes['daff-disabled']).toBeTrue();
    });

    it('should set aria-disabled', () => {
      expect(de.attributes['aria-disabled']).toEqual('true');
    });

    it('should not be selected when clicked', () => {
      de.nativeElement.click();
      fixture.detectChanges();

      expect(wrapper.value()).toBeNull();
    });

    it('should not be reachable with the tab key', () => {
      expect(de.attributes['tabindex']).toEqual('-1');
    });
  });
});
