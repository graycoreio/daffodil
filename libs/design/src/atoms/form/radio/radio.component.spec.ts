import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `
  <daff-radio>
  <input daff-radio-input type="radio" />
  <label daff-radio-label></label>
  <div class="random-content">random content</div>
  </daff-radio>
  `
})

class WrapperComponent {}

describe('DaffRadioComponent', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffRadioComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('daff-radio'));
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-radio` to its host', () => {
    expect(de.nativeElement.classList.contains('daff-radio')).toEqual(true);
  });

  it('should render input[daff-radio-input]', () => {
    const radioInputElement = fixture.debugElement.query(By.css('input[daff-radio-input]'));

    expect(radioInputElement).toBeDefined();
  });

  it('should render input[daff-radio-label]', () => {
    const radioLabelElement = fixture.debugElement.query(By.css('input[daff-radio-label]'));

    expect(radioLabelElement).toBeDefined();
  });

  it('should not render random content', () => {
    const randomContentElement = fixture.debugElement.query(By.css('.random-content'));

    expect(randomContentElement).toBeNull();
  });

});