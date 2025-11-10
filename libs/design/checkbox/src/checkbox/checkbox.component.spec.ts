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
  DAFF_CHECKBOX_COMPONENTS,
  DaffCheckboxComponent,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox [value]="value" [name]="name">
      Terms and conditions
      <daff-hint>Hint</daff-hint>
      <daff-error-message>Error</daff-error-message>
    </daff-checkbox>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
class WrapperComponent {
  value: string;
  name: string;
}

describe('@daffodil/design/checkbox | DaffCheckboxComponent | Defaults', () => {
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

  it('should take value as an input', () => {
    expect(component.value).toEqual(wrapper.value);
  });

  it('should take name as an input', () => {
    expect(component.name).toEqual(wrapper.name);
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-checkbox-[0-9]*');
  });

  it('should have a generated id for the hint', () => {
    const hint = fixture.debugElement.query(By.css('.daff-checkbox__hint-wrapper'));

    expect(hint.nativeElement.id).toMatch('daff-checkbox-[0-9]*-hint');
  });

  it('should have a generated id for the error message', () => {
    const error = fixture.debugElement.query(By.css('.daff-checkbox__error-wrapper'));

    expect(error.nativeElement.id).toMatch('daff-checkbox-[0-9]*-error');
  });
});
