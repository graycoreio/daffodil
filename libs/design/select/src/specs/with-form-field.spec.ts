import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
} from '@daffodil/design/form-field';
import { DaffSelectComponent } from '@daffodil/design/select';

@Component({
  template:`
    <daff-form-field [id]="id">
      <daff-select></daff-select>
    </daff-form-field>
  `,
  imports: [
    DaffSelectComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  id = 'test';
}

describe('@daffodil/design/select | DaffSelectComponent | With Form Field', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSelectComponent;
  let componentDE: DebugElement;
  let formField: DaffFormFieldComponent;

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
    component = componentDE.componentInstance;
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the control type to custom-select', () => {
    expect(formField._control.controlType).toEqual('custom-select');
  });

  it('should set required to false', () => {
    expect(component.required).toEqual(false);
  });
});
