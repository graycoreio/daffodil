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

const BLACK = 'lch(0 0 0)';
const WHITE = 'lch(100 0 0)';

@Component({
  template: `
    <daff-swatch-group aria-label="Color" [(value)]="value">
      <daff-swatch value="red" color="#d32f2f" aria-label="Red"></daff-swatch>
      <daff-swatch picker aria-label="Custom color" [value]="pickerValue()" [disabled]="disabled()"></daff-swatch>
    </daff-swatch-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WrapperComponent {
  value = signal<string>(null);
  disabled = signal(false);
  pickerValue = signal<string>(undefined);
}

describe('@daffodil/design/swatch | DaffSwatchComponent | Picker', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffSwatchComponent;
  let pickerInput: HTMLInputElement;

  const iconColor = () => getComputedStyle(de.query(By.css('.daff-swatch__picker-icon')).nativeElement).color;

  const pick = (color: string) => {
    pickerInput.value = color;
    pickerInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  };

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
    fixture.detectChanges();

    de = fixture.debugElement.queryAll(By.css('daff-swatch'))[1];
    component = de.componentInstance;
    pickerInput = de.query(By.css('input[type="color"]')).nativeElement;
  });

  it('should add a class of "daff-picker" to the host element', () => {
    expect(de.classes['daff-picker']).toBeTrue();
  });

  it('should not render a color input for swatches that are not pickers', () => {
    const swatch = fixture.debugElement.queryAll(By.css('daff-swatch'))[0];

    expect(swatch.query(By.css('input[type="color"]'))).toBeNull();
  });

  it('should hide the color input from assistive technology and the tab order', () => {
    expect(pickerInput.getAttribute('aria-hidden')).toEqual('true');
    expect(pickerInput.getAttribute('tabindex')).toEqual('-1');
  });

  it('should start with a light gray color', () => {
    expect(pickerInput.value).toEqual('#efefef');
    expect(component.currentValue()).toEqual('#efefef');
  });

  it('should ignore a value set on the swatch', () => {
    wrapper.pickerValue.set('#000000');
    fixture.detectChanges();

    expect(component.currentValue()).toEqual('#efefef');
  });

  it('should fill the swatch with the starting color', () => {
    const fill = de.query(By.css('.daff-swatch__fill')).nativeElement;

    expect(fill.style.background).toContain('rgb(239, 239, 239)');
  });

  it('should display an eyedropper icon', () => {
    const icon = de.query(By.css('fa-icon.daff-swatch__picker-icon'));

    expect(icon).not.toBeNull();
    expect(icon.nativeElement.querySelector('svg').getAttribute('data-icon')).toEqual('eye-dropper');
  });

  it('should use a black icon on the starting color', () => {
    expect(iconColor()).toEqual(BLACK);
  });

  it('should use a white icon on a dark color', () => {
    pick('#000000');

    expect(iconColor()).toEqual(WHITE);
  });

  describe('when it is clicked', () => {
    beforeEach(() => {
      spyOn(pickerInput, 'showPicker');
      de.nativeElement.click();
      fixture.detectChanges();
    });

    it('should select the starting color', () => {
      expect(wrapper.value()).toEqual('#efefef');
      expect(de.attributes['aria-checked']).toEqual('true');
    });

    it('should open the color picker', () => {
      expect(pickerInput.showPicker).toHaveBeenCalledWith();
    });
  });

  it('should open the color picker when space is pressed', () => {
    spyOn(pickerInput, 'showPicker');
    de.triggerEventHandler('keydown.space', new KeyboardEvent('keydown', { key: ' ' }));

    expect(pickerInput.showPicker).toHaveBeenCalledWith();
  });

  it('should fall back to clicking the color input when the picker cannot be shown', () => {
    spyOn(pickerInput, 'showPicker').and.throwError('NotAllowedError');
    spyOn(pickerInput, 'click');
    de.nativeElement.click();

    expect(pickerInput.click).toHaveBeenCalledWith();
  });

  it('should not open the color picker when the swatch is selected with arrow keys', () => {
    spyOn(pickerInput, 'showPicker');
    const first = fixture.debugElement.queryAll(By.css('daff-swatch'))[0];
    first.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(wrapper.value()).toEqual('#efefef');
    expect(pickerInput.showPicker).not.toHaveBeenCalled();
  });

  describe('when a color is picked', () => {
    beforeEach(() => {
      pick('#00ff00');
    });

    it('should set the picked color as the value of the swatch group', () => {
      expect(wrapper.value()).toEqual('#00ff00');
    });

    it('should stay selected', () => {
      expect(de.attributes['aria-checked']).toEqual('true');
    });

    it('should fill the swatch with the picked color', () => {
      const fill = de.query(By.css('.daff-swatch__fill')).nativeElement;

      expect(fill.style.background).toContain('rgb(0, 255, 0)');
    });

    it('should use a black icon on a light color', () => {
      expect(iconColor()).toEqual(BLACK);
    });

    it('should select the picked color again after another swatch is selected', () => {
      fixture.debugElement.queryAll(By.css('daff-swatch'))[0].nativeElement.click();
      spyOn(pickerInput, 'showPicker');
      de.nativeElement.click();
      fixture.detectChanges();

      expect(wrapper.value()).toEqual('#00ff00');
    });
  });

  describe('when it is disabled', () => {
    beforeEach(() => {
      wrapper.disabled.set(true);
      fixture.detectChanges();
      spyOn(pickerInput, 'showPicker');
      de.nativeElement.click();
    });

    it('should not open the color picker', () => {
      expect(pickerInput.showPicker).not.toHaveBeenCalled();
    });

    it('should not be selected', () => {
      expect(wrapper.value()).toBeNull();
    });
  });
});
