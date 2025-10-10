import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_CHECKBOX_COMPONENTS,
  DaffCheckboxComponent,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox-set name="toppings">
      <daff-checkbox value="lettuce">Apple</daff-checkbox>
      <daff-checkbox value="tomato">Grape</daff-checkbox>
      <daff-checkbox value="pickle">Peach</daff-checkbox>
    </daff-checkbox-set>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/checkbox | DaffCheckboxComponent with DaffCheckboxSetComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
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
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take a value as an input', () => {
    expect(component.value).not.toBeUndefined();
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-checkbox-[0-9]*');
  });

  it('should have a role of checkbox', () => {
    expect(component.role).toBe('checkbox');
  });
});
