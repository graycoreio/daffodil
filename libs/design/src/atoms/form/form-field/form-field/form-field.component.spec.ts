import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFormFieldComponent } from './form-field.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: `
  <daff-form-field>
    <input daff-input>
    <div class="random_content">random content</div>
    <daff-error-message></daff-error-message>
  </daff-form-field>`})
class WrapperComponent {}

@Component({selector: 'daff-error-message', template: ''})
class MockDaffErrorMessageComponent {}

describe('DaffFormFieldComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFormFieldComponent,
        MockDaffErrorMessageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set .daff-form-field on host element', () => {
    const hostElement = fixture.debugElement.query(By.css('daff-form-field')).nativeElement;

    expect(hostElement.classList.contains('daff-form-field')).toBeTruthy();
  });

  it('should render [daff-input]', () => {
    const daffInputElement = fixture.debugElement.query(By.css('[daff-input]'));

    expect(daffInputElement).toBeDefined();
  });

  it('should not render random content', () => {
    const randomContentElement = fixture.debugElement.query(By.css('.random_content'));

    expect(randomContentElement).toBeNull();
  });
});
