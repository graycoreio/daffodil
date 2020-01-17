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
    </daff-checkbox-set>`
})
class NonArrayValueWrapperComponent {
  checkboxSet = new FormControl('checkbox1');
}

describe('DaffCheckboxSetComponent | No Array Value', () => {
  let fixture: ComponentFixture<NonArrayValueWrapperComponent>;
  let wrapper: NonArrayValueWrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
        DaffFormLabelModule
      ],
      declarations: [
        DaffCheckboxSetComponent,
        NonArrayValueWrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonArrayValueWrapperComponent);
    wrapper = fixture.componentInstance;
  });

  it('should throw a non array error', () => {
    expect(() => {
      fixture.detectChanges();
    }).toThrowError('DaffCheckboxSetComponent value needs to be an array.');
  });
});
