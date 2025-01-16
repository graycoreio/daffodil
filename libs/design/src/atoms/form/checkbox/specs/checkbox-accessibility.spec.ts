import { Component } from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffCheckboxComponent } from '../checkbox.component';
import { DaffCheckboxModule } from '../checkbox.module';

@Component({
  template: `
    <daff-checkbox aria-label='testLabel' aria-labelledby='testParent'></daff-checkbox>
  `,
  standalone: false,
})
class CheckboxWrapperComponent { }

describe('DaffCheckbox Accessibility', () => {
  let checkboxWrapper: CheckboxWrapperComponent;

  let component: DaffCheckboxComponent;

  let fixture: ComponentFixture<CheckboxWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxWrapperComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(CheckboxWrapperComponent);
    checkboxWrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a role of checkbox', () => {
    expect(component.role).toBe('checkbox');
  });

  it('should have a aria-label', () => {
    expect(component.label).toBe('testLabel');
  });

  it('should have a aria-labeledby', () => {
    expect(component.labeledBy).toBe('testParent');
  });

});
