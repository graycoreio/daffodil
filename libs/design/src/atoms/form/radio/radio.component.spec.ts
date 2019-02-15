import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffRadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<daff-radio></daff-radio>`
})

class WrapperComponent {}

describe('DaffRadioComponent', () => {
  let wrapper: WrapperComponent;
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
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('daff-radio',() => {
    it('should set `daff-radio` on host element', () => {
      expect(fixture.debugElement.query(By.css('[daff-radio]')).nativeElement.classList.contains('daff-radio')).toEqual(true);
    });
  });
});