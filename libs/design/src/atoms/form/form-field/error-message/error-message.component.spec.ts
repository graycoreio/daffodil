import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffErrorMessageComponent } from './error-message.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<daff-error-message>Error Message</daff-error-message>'})
class WrapperComponent {}

describe('DaffErrorMessageComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffErrorMessageComponent
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

  it('should add a `daff-error-message` class to the host element', () => {
    const hostElement = fixture.debugElement.query(By.css('daff-error-message')).nativeElement;

    expect(hostElement.classList.contains('daff-error-message')).toBeTruthy();
  });
});


