import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from '../radio.component';
import { DaffRadioModule } from '../radio.module';


@Component({
  template: `

<daff-radio-set [formGroup]='radioGroup' name='fruit'>
  <daff-radio formControlName='fruit' value='apple'>Apple</daff-radio>
  <daff-radio formControlName='fruit' value='grape'>Grape</daff-radio>
  <daff-radio formControlName='fruit' value='peach'>Peach</daff-radio>
</daff-radio-set>
  `,
  standalone: false,
})
class RadioEmbeddedComponent {
  radioGroup = new UntypedFormGroup({
    fruit: new UntypedFormControl(),
  });

}
describe('DaffRadioComponent within a daff-radio-set', () => {
  let radioEmbedded: RadioEmbeddedComponent;

  let embeddedComponent: DaffRadioComponent;

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

  describe('meets the following', () => {
    beforeEach(() => {
      embeddedFixture = TestBed.createComponent(RadioEmbeddedComponent);
      radioEmbedded = embeddedFixture.componentInstance;
      embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-radio')).componentInstance;
      embeddedFixture.detectChanges();
    });

    it('should create', () => {
      expect(radioEmbedded).toBeTruthy();
    });

    it('should get its name from the parent daff-radioset', () => {
      expect(embeddedComponent.name).toEqual('fruit');
    });

    it('should take a value as an input', () => {
      expect(embeddedComponent.value).not.toBeUndefined();
    });

    it('should have a generated id', () => {
      expect(embeddedComponent.id).toMatch('daff-radio-[0-9]*');
    });

  });
});
