import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  DaffRadioSetComponent,
  DaffRadioSetDirection
} from './radio-set.component';
import { DaffRadioComponent } from '../radio/radio.component';

@Component ({
  template: `
  <daff-radio-set [formControl]="controlValue" [direction]="direction">
    <daff-radio [value]="value1"></daff-radio>
    <daff-radio [value]="value2"></daff-radio>
    <daff-radio [value]="value3"></daff-radio>
    <daff-radio [value]="value4"></daff-radio>
    <daff-radio [value]="value5"></daff-radio>
  </daff-radio-set>`
})
class WrapperComponent {
  controlValue: FormControl;
  direction: DaffRadioSetDirection;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
}

describe('DaffRadioSetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffRadioSetComponent;
  let radioDE: DebugElement[];
  const initiallySelectedRadio = 'value2';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DaffRadioSetComponent,
        DaffRadioComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.controlValue = new FormControl(initiallySelectedRadio);
    wrapper.value1 = 'value1';
    wrapper.value2 = 'value2';
    wrapper.value3 = null;
    wrapper.value4 = undefined;
    wrapper.value5 = '';
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('daff-radio-set'));
    component = de.componentInstance;
    radioDE = fixture.debugElement.queryAll(By.css('daff-radio'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-radio-set>', () => {
    it('should add a class of "daff-radio-set" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-radio-set': true,
      }));
    });
  });

  describe('setting the direction', () => {
    describe('when direction="vertical"', () => {
      it('should add a class of "daff-radio-set--vertical" to the host element', () => {
        wrapper.direction = 'vertical';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-radio-set--vertical': true
        }));
      });
    });

    describe('when direction="horizontal"', () => {
      it('should add a class of "daff-radio-set--horizontal" to the host element', () => {
        wrapper.direction = 'horizontal';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-radio-set--horizontal': true
        }));
      });
    });
  });

  it('should add a radiogroup role to the <daff-radio-set>', () => {
    expect(de.attributes.role).toEqual('radiogroup');
  });

  it('should select the initial value of the formControl given', function(done) {
    setTimeout(function() {
      radioDE.filter(radio => radio.componentInstance.value === initiallySelectedRadio).map(radio => {
        expect(radio.componentInstance.selected).toBeTruthy();
      });
      done();
    });
  });

  it('should update the formControl when a <daff-radio> is selected', () => {
    radioDE[0].componentInstance._onRadioClicked({ stopPropagation() {}});
    fixture.detectChanges();

    expect(wrapper.controlValue.value).toEqual(radioDE[0].componentInstance.value);
  });

  it('should set the name of the <golf-radio-set> on each <golf-radio>radio', () => {
    expect(radioDE[0].componentInstance.name).toEqual(component.name);
  });

  describe('writeValue', () => {

    it('should accept null as a valid value', () => {
      component.writeValue(null);

      radioDE.filter(radio => radio.componentInstance.value === null).map(radio => {
        expect(radio.componentInstance.selected).toBeTruthy();
      });
    });

    it('should accept undefined as a valid value', () => {
      component.writeValue(undefined);

      radioDE.filter(radio => radio.componentInstance.value === undefined).map(radio => {
        expect(radio.componentInstance.selected).toBeTruthy();
      });
    });

    it('should deselect all but the given radio', () => {
      component.writeValue('radioValue1');

      radioDE.filter(radio => radio.componentInstance.value !== 'radioValue1').map(radio => {
        expect(radio.componentInstance.selected).toBeFalsy();
      });
    });
  });
});

@Component ({
  template: `
  <daff-radio-set>
    <daff-radio [value]="value1"></daff-radio>
    <daff-radio [value]="value2"></daff-radio>
  </daff-radio-set>`
})
class WrapperErrorComponent {
  value1: string;
  value2: string;
}

describe('DaffRadioSetComponent', () => {
  let fixture: ComponentFixture<WrapperErrorComponent>;
  let wrapper: WrapperErrorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DaffRadioSetComponent,
        DaffRadioComponent,
        WrapperErrorComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperErrorComponent);
    wrapper = fixture.componentInstance;
    wrapper.value1 = 'value1';
    wrapper.value2 = 'value2';
  });

  it('should throw an error when not provided a formControl', () => {
    expect(() => fixture.detectChanges()).toThrowError();
  });
});
