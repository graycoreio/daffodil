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

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  template: `
    <daff-swatch-group aria-label="Size" [(value)]="value">
      <daff-swatch value="s" label="S"></daff-swatch>
      <daff-swatch value="m" [label]="label()" [picker]="true"></daff-swatch>
    </daff-swatch-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WrapperComponent {
  value = signal<string>(null);
  label = signal('M');
}

describe('@daffodil/design/swatch | DaffSwatchComponent | Text', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let swatches: DebugElement[];

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

    swatches = fixture.debugElement.queryAll(By.css('daff-swatch'));
  });

  it('should add a class of "daff-text" to the host element', () => {
    expect(swatches[0].classes['daff-text']).toBeTrue();
  });

  it('should display the label as text', () => {
    expect(swatches[0].nativeElement.textContent.trim()).toEqual('S');
  });

  it('should not render a color fill', () => {
    expect(swatches[0].query(By.css('.daff-swatch__fill'))).toBeNull();
  });

  it('should be selected when clicked', () => {
    swatches[0].nativeElement.click();
    fixture.detectChanges();

    expect(wrapper.value()).toEqual('s');
    expect(swatches[0].attributes['aria-checked']).toEqual('true');
  });

  it('should not act as a color picker when it has a label', () => {
    expect(swatches[1].classes['daff-picker']).toBeFalsy();
    expect(swatches[1].query(By.css('input[type="color"]'))).toBeNull();
  });

  it('should go back to a color swatch when the label is removed', () => {
    wrapper.label.set(undefined);
    fixture.detectChanges();

    expect(swatches[1].classes['daff-text']).toBeFalsy();
    expect(swatches[1].query(By.css('.daff-swatch__fill'))).not.toBeNull();
  });
});
