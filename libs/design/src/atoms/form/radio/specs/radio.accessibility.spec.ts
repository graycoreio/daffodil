import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DaffRadioModule } from '../radio.module';
import { DaffRadioComponent } from '../radio.component';


@Component({
  template: `
    <daff-radio name='test' value='testValue' aria-labelledby="user" aria-label="test"></daff-radio>
  `
})
class RadioWrapperComponent { }
describe('DaffRadio Accessibility', () => {
  let radioWrapper: RadioWrapperComponent;

  let component: DaffRadioComponent;

  let fixture: ComponentFixture<RadioWrapperComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioWrapperComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffRadioModule
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWrapperComponent);
    radioWrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(radioWrapper).toBeTruthy();
  });
  it('should have a role of radio', () => {
    expect(component.role).toBe('radio');
  });
  it('should have an aria-label of test', () => {
    expect(component.label).toBe('test');
  });
  it('should have a role of radio', () => {
    expect(component.labelledby).toBe('user');
  });
});