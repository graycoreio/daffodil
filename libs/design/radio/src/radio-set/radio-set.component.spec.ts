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
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_RADIO_COMPONENTS,
  DaffRadioSetComponent,
} from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio-set [formControl]="fruits" name="fruit">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="grape">Grape</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  fruits = new UntypedFormControl();
}

describe('@daffodil/design/radio | DaffRadioSetComponent | Defaults', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let component: DaffRadioSetComponent;

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
    de = fixture.debugElement.query(By.css('daff-radio-set'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take a name as an input', () => {
    expect(component.name()).toBe('fruit');
  });

  it('should have a role of radiogroup', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('radiogroup');
  });
});
