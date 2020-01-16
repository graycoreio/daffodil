import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioSetComponent } from '../radio-set.component';
import { DaffRadioComponent } from '../../radio/radio.component';

@Component ({
  template: `
  <daff-radio-set [formControl]="controlValue">
    <daff-radio value="value"></daff-radio>
  </daff-radio-set>`
})

class WrapperComponent {
	controlValue: FormControl;
}

describe('DaffRadioSetComponent | Defaults', () => {
  let component: DaffRadioSetComponent;
	let fixture: ComponentFixture<WrapperComponent>;
	let wrapper: WrapperComponent;
	const initiallySelectedRadio = 'value';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule
			],
      declarations: [
				DaffRadioSetComponent,
				DaffRadioComponent,
				WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		wrapper = fixture.componentInstance;
    wrapper.controlValue = new FormControl(initiallySelectedRadio);
		wrapper = fixture.componentInstance;
		component = fixture.debugElement.query(By.css('daff-radio-set')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default direction to vertical', () => {
    expect(component.direction).toEqual('vertical');
  });
});
