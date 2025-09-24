import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffSelectComponent } from '@daffodil/design/select';

@Component({
  template:`
    <daff-form-field>
			<daff-form-label>Email></daff-form-label>
      <daff-select [formControl]="control"></daff-select>
    </daff-form-field>
  `,
  imports: [
    DaffSelectComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class FormsWrapperComponent {
  control: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}

describe('@daffodil/design | DaffSelectComponent | Reactive Forms Required State', () => {
  let wrapper: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;
  let componentDE: DebugElement;
  let component: DaffSelectComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('daff-select'));
    component = componentDE.injector.get(DaffSelectComponent);
  });

  describe('when the reactive forms input is required', () => {
    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });
  });

  describe('when the form control is no longer required', () =>{
    it('should set required to false', () => {
      wrapper.control.setValidators([]);
      fixture.detectChanges();

      expect(component.required).toEqual(false);
    });
  });
});
