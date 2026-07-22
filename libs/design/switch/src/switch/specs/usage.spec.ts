import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_SWITCH_COMPONENTS,
  DaffSwitchComponent,
} from '@daffodil/design/switch';

import { DaffSwitchLabelPosition } from '../label-position';
import { DaffSwitchSize } from '../switch.component';

@Component({
  template: `
    <daff-switch [size]="size()" [labelPosition]="labelPosition()" [checked]="checked()">Wifi</daff-switch>
  `,
  imports: [
    DAFF_SWITCH_COMPONENTS,
  ],
})

class WrapperComponent {
  size = signal<DaffSwitchSize>(undefined);
  labelPosition = signal<DaffSwitchLabelPosition>(undefined);
  checked = signal<boolean>(undefined);
}

describe('@daffodil/design/switch | DaffSwitchComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffSwitchComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement.query(By.css('daff-switch'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('checked property', () => {
    it('should take `checked` as an input', () => {
      expect(component.checked()).toEqual(wrapper.checked());
    });

    it('should add a class of "checked" to the host element when checked is true', () => {
      wrapper.checked.set(true);
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('checked')).toBeTruthy();
    });
  });

  describe('size property', () => {
    it('should take `size` as an input', () => {
      expect(component.size).toEqual(wrapper.size());
    });

    it('should add a class of "daff-sm" to the host element when size="sm"', () => {
      wrapper.size.set('sm');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-sm')).toBeTruthy();
    });
  });

  describe('labelPosition property', () => {
    it('should take `labelPosition` as an input', () => {
      expect(component.labelPosition()).toEqual(wrapper.labelPosition());
    });

    it('should add a class of "left" to the host element when labelPosition="left"', () => {
      wrapper.labelPosition.set('left');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('left')).toBeTruthy();
    });

    it('should add a class of "right" to the host element when labelPosition="right"', () => {
      wrapper.labelPosition.set('right');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('right')).toBeTruthy();
    });

    it('should add a class of "top" to the host element when labelPosition="top"', () => {
      wrapper.labelPosition.set('top');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('top')).toBeTruthy();
    });

    it('should add a class of "bottom" to the host element when labelPosition="bottom"', () => {
      wrapper.labelPosition.set('bottom');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('bottom')).toBeTruthy();
    });
  });
});
