import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from '../radio.component';
import { DaffRadioModule } from '../radio.module';



@Component({
  template: `
    <daff-radio name='test' value='testValue' [formControl]='radio'></daff-radio>
  `,
  standalone: false,
})
class RadioWrapperComponent {
  radio = new UntypedFormControl();
}

describe('DaffRadioControlValueAccessorDirective', () => {

  describe('with the directive', () => {
    let radioWrapper: RadioWrapperComponent;

    let component: DaffRadioComponent;

    let fixture: ComponentFixture<RadioWrapperComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          RadioWrapperComponent,
        ],
        imports: [
          ReactiveFormsModule,
          DaffRadioModule,
        ],
      })
        .compileComponents();
    }));

    describe('the DaffRadioComponent', () => {

      beforeEach(() => {

        fixture = TestBed.createComponent(RadioWrapperComponent);
        radioWrapper = fixture.componentInstance;
        component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
        fixture.detectChanges();
      });

      it('has the writeValue function for formControls', async () => {

        expect(component.checked).toEqual(false);

        radioWrapper.radio.setValue('testValue');

        expect(component.checked).toEqual(true);
      });
    });

  });

  describe('without the directive', () => {
    let radioWrapper: RadioWrapperComponent;

    let component: DaffRadioComponent;

    let fixture: ComponentFixture<RadioWrapperComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          RadioWrapperComponent,
          DaffRadioComponent,
        ],
        imports: [
          ReactiveFormsModule,
        ],
      })
        .compileComponents();
    }));

    describe('the DaffRadioComponent', () => {

      it('throws an error without the directive to give the itself the CVA interface', async () => {
        fixture = TestBed.createComponent(RadioWrapperComponent);
        radioWrapper = fixture.componentInstance;
        expect(() => {
          component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
          fixture.detectChanges();
        }).toThrowError();
      });

    });
  });
});
