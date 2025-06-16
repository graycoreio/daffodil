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
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DaffSelectComponent } from '@daffodil/design/select';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <daff-select [formControl]="control"></daff-select>
    </daff-form-field>
  `,
  imports: [
    DaffSelectComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  control: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true });
}

describe('@daffodil/design/select | DaffSelectComponent | Disabled State', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSelectComponent;
  let componentDE: DebugElement;
  let buttonElement: HTMLButtonElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('daff-select'));
    buttonElement = fixture.debugElement.query(By.css('.daff-select__field')).nativeElement;
    component = componentDE.injector.get(DaffSelectComponent);
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the reactive forms select is disabled', () => {
    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });

    it('should disable the button', () => {
      expect(buttonElement.disabled).toBeTrue();
    });
  });


  describe('when the form control is no longer disabled', () =>{
    it('should set disabled to false', () => {
      wrapper.control.enable();
      fixture.detectChanges();

      expect(component.disabled).toEqual(false);
    });
  });
});
