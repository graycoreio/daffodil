import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<input daff-input>`
})

class WrapperComponent {}

describe('DaffInputComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffInputComponent,
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

  describe('daff-input',() => {
    it('should set `daff-input` on host element', () => {
      expect(fixture.debugElement.query(By.css('[daff-input]')).nativeElement.classList.contains('daff-input')).toEqual(true);
    });
  });
});