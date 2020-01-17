import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DaffCheckboxModule } from '../../checkbox/checkbox.module';
import { DaffFormLabelModule } from '../../form-label/form-label.module';
import { DaffCheckboxSetComponent } from '../checkbox-set.component';

@Component({
  template: `
    <daff-checkbox-set [formControl]="checkboxSet">
      <label daffFormLabel></label>
      <daff-checkbox value="checkbox1">Checkbox 1</daff-checkbox>
      <daff-checkbox value="checkbox2">Checkbox 2</daff-checkbox>
      <daff-checkbox value="checkbox1">Checkbox 1</daff-checkbox>
    </daff-checkbox-set>`
})
class DuplicateCheckboxesWrapperComponent {
  checkboxSet = new FormControl([]);
}

describe('DaffCheckboxSetComponent | Duplicate Checkboxes', () => {
  let fixture: ComponentFixture<DuplicateCheckboxesWrapperComponent>;
  let wrapper: DuplicateCheckboxesWrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
        DaffFormLabelModule
      ],
      declarations: [
        DaffCheckboxSetComponent,
        DuplicateCheckboxesWrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateCheckboxesWrapperComponent);
    wrapper = fixture.componentInstance;
  });

  it('should throw a duplicate values error', () => {
    expect(() => { fixture.detectChanges(); })
      .toThrowError(/Duplicate checkbox value/);
  });
});
