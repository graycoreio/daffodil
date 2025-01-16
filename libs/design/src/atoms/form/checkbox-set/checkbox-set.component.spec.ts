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

import { DaffCheckboxSetComponent } from './checkbox-set.component';
import { DaffCheckboxModule } from '../checkbox/checkbox.module';

@Component({
  template: `

  <daff-checkbox-set name="example" [formArray]="checkboxArray">
  <daff-checkbox [formControl]="checkboxArray.at(0)" value="option1">Option 1 </daff-checkbox>
  <daff-checkbox [formControl]="checkboxArray.at(1)" value="option2">Option 2 </daff-checkbox>
  <daff-checkbox [formControl]="checkboxArray.at(2)" value="option3">Option 3 </daff-checkbox>
</daff-checkbox-set>
  `,
  standalone: false,
})
class CheckboxEmbeddedComponent implements OnInit {
  @ViewChild(DaffCheckboxSetComponent)
  private checkboxSet: DaffCheckboxSetComponent;
  checkboxArray = new UntypedFormArray([new UntypedFormControl(), new UntypedFormControl(), new UntypedFormControl()]);


  selectedValues = [];

  ngOnInit() {
    this.checkboxArray.setValue([false, true, true]);
  }
  displayList() {
    this.selectedValues = this.checkboxSet.getValues();
  }
}

describe('@daffodil/design | DaffCheckboxSetComponent', () => {
  let embeddedComponent: DaffCheckboxSetComponent;
  let embeddedFixture: ComponentFixture<CheckboxEmbeddedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    embeddedFixture = TestBed.createComponent(CheckboxEmbeddedComponent);
    embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-Checkbox-set')).componentInstance;
    embeddedFixture.detectChanges();
  });

  it('should create', () => {
    expect(embeddedComponent).toBeTruthy();
  });

  it('should take a name as an input', () => {
    expect(embeddedComponent.name).toBe('example');
  });

  describe('and the getValues function', () => {
    it('should return a list of selected values', () => {
      expect(embeddedComponent.getValues()).toEqual(['option2', 'option3']);
    });
  });
});
