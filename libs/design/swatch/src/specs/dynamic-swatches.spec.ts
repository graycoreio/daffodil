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
    <daff-swatch-group aria-label="Color" [(value)]="value">
      @for (color of colors(); track color) {
        <daff-swatch [value]="color" [color]="color" [attr.aria-label]="color"></daff-swatch>
      }
    </daff-swatch-group>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
class WrapperComponent {
  value = signal('blue');
  colors = signal(['red', 'green', 'blue']);
}

describe('@daffodil/design/swatch | DaffSwatchGroupComponent | Dynamic swatches', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let swatches: DebugElement[];

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
    fixture.detectChanges();

    swatches = fixture.debugElement.queryAll(By.css('daff-swatch'));
  });

  it('should render swatches created with @for', () => {
    expect(swatches.length).toEqual(3);
  });

  it('should select the swatch that matches the initial value', () => {
    expect(swatches[2].attributes['aria-checked']).toEqual('true');
  });

  it('should make only the selected swatch tabbable', () => {
    expect(tabIndexes()).toEqual(['-1', '-1', '0']);
  });

  it('should handle swatches added after the first render', () => {
    wrapper.value.set('black');
    wrapper.colors.set(['red', 'green', 'blue', 'black']);
    fixture.detectChanges();
    swatches = fixture.debugElement.queryAll(By.css('daff-swatch'));

    expect(swatches[3].attributes['aria-checked']).toEqual('true');
    expect(tabIndexes()).toEqual(['-1', '-1', '-1', '0']);
  });
});
