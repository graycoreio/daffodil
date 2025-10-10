import {
  Component,
  ViewChild,
  OnInit,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormControl,
  ReactiveFormsModule,
  UntypedFormArray,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_CHECKBOX_COMPONENTS,
  DaffCheckboxSetComponent,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox-set name="example" [formArray]="checkboxArray">
      <daff-checkbox [formControl]="checkboxArray.at(0)" value="option1">Option 1 </daff-checkbox>
      <daff-checkbox [formControl]="checkboxArray.at(1)" value="option2">Option 2 </daff-checkbox>
      <daff-checkbox [formControl]="checkboxArray.at(2)" value="option3">Option 3 </daff-checkbox>
    </daff-checkbox-set>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent implements OnInit {
  @ViewChild(DaffCheckboxSetComponent)
  private checkboxSet: DaffCheckboxSetComponent;
  checkboxArray = new UntypedFormArray([new UntypedFormControl(), new UntypedFormControl(), new UntypedFormControl()]);


  selectedValues = [];

  /**
   * @docs-private
   */
  ngOnInit() {
    this.checkboxArray.setValue([false, true, true]);
  }
  displayList() {
    this.selectedValues = this.checkboxSet.getValues();
  }
}

describe('@daffodil/design/checkbox | DaffCheckboxSetComponent', () => {
  let component: DaffCheckboxSetComponent;
  let fixture: ComponentFixture<WrapperComponent>;

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
    component = fixture.debugElement.query(By.css('daff-checkbox-set')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a name as an input', () => {
    expect(component.name).toBe('example');
  });

  it('should return a list of selected values', () => {
    expect(component.getValues()).toEqual(['option2', 'option3']);
  });
});
