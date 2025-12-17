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
  UntypedFormControl,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_CHECKBOX_COMPONENTS,
  DaffCheckboxSetComponent,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox-set [formGroup]="example">
      <daff-checkbox formControlName="choiceOne">Choice 1 </daff-checkbox>
      <daff-checkbox formControlName="choiceTwo">Choice 2 </daff-checkbox>
      <daff-checkbox formControlName="choiceThree">Choice 3 </daff-checkbox>
      <daff-hint>Hint</daff-hint>
      <daff-error-message>Error</daff-error-message>
    </daff-checkbox-set>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  example = new UntypedFormGroup({
    choiceOne: new UntypedFormControl(''),
    choiceTwo: new UntypedFormControl(''),
    choiceThree: new UntypedFormControl(''),
  });
}

describe('@daffodil/design/checkbox | DaffCheckboxSetComponent | Defaults', () => {
  let component: DaffCheckboxSetComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement.query(By.css('daff-checkbox-set'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-checkbox-set" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-checkbox-set': true,
    }));
  });

  it('should have a role of group', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('group');
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-checkbox-set-[0-9]*');
  });

  it('should set the aria-labelledby to the id', () => {
    expect(de.nativeElement.getAttribute('aria-labelledby')).toEqual(component.id);
  });

  it('should have a generated id for the hint', () => {
    const hint = fixture.debugElement.query(By.css('.daff-checkbox-set__hint-wrapper'));

    expect(hint.nativeElement.id).toMatch('daff-checkbox-set-[0-9]*-hint');
  });

  it('should have a generated id for the error message', () => {
    const error = fixture.debugElement.query(By.css('.daff-checkbox-set__error-wrapper'));

    expect(error.nativeElement.id).toMatch('daff-checkbox-set-[0-9]*-error');
  });
});
