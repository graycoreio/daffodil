import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
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
  `
})
class RadioEmbeddedComponent {
  radioGroup = new FormGroup({
    fruit: new FormControl('apple')
  });
  disable() {
    this.radioGroup.disable();
  }
  setValue() {
    this.radioGroup.setValue({ fruit: 'pear' });
  }
}
describe('DaffRadioComponent', () => {
  let radioEmbedded: RadioEmbeddedComponent;

  let embeddedComponent: DaffRadioComponent;

  let embeddedFixture: ComponentFixture<RadioEmbeddedComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffRadioModule
      ]
    })
      .compileComponents();
  }));

  describe('and the control value accessor implementation', () => {
    beforeEach(() => {
      embeddedFixture = TestBed.createComponent(RadioEmbeddedComponent);
      radioEmbedded = embeddedFixture.componentInstance;
      embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-radio')).componentInstance;
      embeddedFixture.detectChanges();
    });
    it('should let the value be set from a form control', () => {
      radioEmbedded.setValue();
      expect(radioEmbedded.radioGroup.value).toEqual({'fruit': 'pear'});
    });
    it('should let the radio be disabled from a form control', () => {
      radioEmbedded.disable();
      expect(embeddedComponent.disabled).toEqual(true);
    });

  })
});
