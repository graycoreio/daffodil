import {
  Component,
  DebugElement,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  template: `
    <daff-swatch-group aria-label="Color" [formControl]="control">
      <daff-swatch value="red" color="#d32f2f" aria-label="Red"></daff-swatch>
      <daff-swatch value="blue" color="#1976d2" aria-label="Blue"></daff-swatch>
    </daff-swatch-group>
    <button type="button">Outside</button>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    DAFF_SWATCH_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  control = new FormControl('blue');
}

describe('@daffodil/design/swatch | DaffSwatchGroupComponent | Reactive forms', () => {
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

  it('should select the swatch that matches the initial control value', () => {
    expect(swatches[1].classes['daff-selected']).toBeTrue();
  });

  it('should select the swatch that matches a new control value', () => {
    wrapper.control.setValue('red');
    fixture.detectChanges();

    expect(swatches[0].classes['daff-selected']).toBeTrue();
    expect(swatches[1].classes['daff-selected']).toBeFalsy();
  });

  it('should update the control value and mark it dirty when a swatch is clicked', () => {
    swatches[0].nativeElement.click();
    fixture.detectChanges();

    expect(wrapper.control.value).toEqual('red');
    expect(wrapper.control.dirty).toBeTrue();
  });

  it('should disable every swatch when the control is disabled', () => {
    wrapper.control.disable();
    fixture.detectChanges();

    expect(swatches.every((swatch) => swatch.classes['daff-disabled'])).toBeTrue();

    swatches[0].nativeElement.click();
    fixture.detectChanges();

    expect(wrapper.control.value).toEqual('blue');
  });

  it('should mark the control as touched when focus leaves the group', () => {
    swatches[1].nativeElement.focus();
    fixture.debugElement.query(By.css('button')).nativeElement.focus();

    expect(wrapper.control.touched).toBeTrue();
  });

  it('should not mark the control as touched when focus moves between swatches', () => {
    swatches[1].nativeElement.focus();
    swatches[0].nativeElement.focus();

    expect(wrapper.control.touched).toBeFalse();
  });
});
