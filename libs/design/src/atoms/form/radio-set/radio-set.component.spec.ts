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
  UntypedFormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioSetComponent } from './radio-set.component';
import { DaffRadioModule } from '../radio/radio.module';

@Component({
  template: `

<daff-radio-set [formGroup]="radioGroup" name="fruit">
  <daff-radio formControlName="fruit" value="apple">Apple</daff-radio>
  <daff-radio formControlName="fruit" value="grape">Grape</daff-radio>
  <daff-radio formControlName="fruit" value="peach">Peach</daff-radio>
</daff-radio-set>
  `,
  standalone: false,
})
class RadioEmbeddedComponent {
  radioGroup = new UntypedFormGroup({
    fruit: new UntypedFormControl(),
  });
}

describe('DaffRadioSetComponent', () => {

  let de: DebugElement;
  let radioEmbedded: RadioEmbeddedComponent;
  let embeddedComponent: DaffRadioSetComponent;
  let embeddedFixture: ComponentFixture<RadioEmbeddedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffRadioModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    embeddedFixture = TestBed.createComponent(RadioEmbeddedComponent);
    radioEmbedded = embeddedFixture.componentInstance;
    de = embeddedFixture.debugElement.query(By.css('daff-radio-set'));
    embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-radio-set')).componentInstance;
    embeddedFixture.detectChanges();
  });

  it('should create', () => {
    expect(embeddedComponent).toBeTruthy();
  });

  it('should take a name as an input', () => {
    expect(embeddedComponent.name).toBe('fruit');
  });

  it('should have a role of radiogroup', () => {
    expect(embeddedComponent.role).toBe('radiogroup');
  });
});
