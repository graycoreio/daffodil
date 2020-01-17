import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffCheckboxSetComponent } from '../checkbox-set.component';
import { DaffCheckboxComponent } from '../../checkbox/checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component ({
  template: `
  <daff-checkbox-set [formControl]="controlValue">
    <daff-checkbox value="checkbox1"></daff-checkbox>
    <daff-checkbox value="checkbox2"></daff-checkbox>
  </daff-checkbox-set>`
})

class WrapperComponent {
	controlValue = new FormControl(['checkbox1']);
}

describe('DaffCheckboxSetComponent | Defaults', () => {
  let component: DaffCheckboxSetComponent;
	let fixture: ComponentFixture<WrapperComponent>;
	let wrapper: WrapperComponent;
	const selectedCheckboxes = ['checkbox1'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FontAwesomeModule
			],
      declarations: [
				DaffCheckboxSetComponent,
				DaffCheckboxComponent,
				WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		wrapper = fixture.componentInstance;
    wrapper.controlValue = new FormControl(selectedCheckboxes);
		component = fixture.debugElement.query(By.css('daff-checkbox-set')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default direction to vertical', () => {
    expect(component.direction).toEqual('vertical');
  });
});