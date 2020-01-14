import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffErrorMessageComponent } from './error-message.component';

@Component ({
  template: `<daff-error-message></daff-error-message>`
})

class WrapperComponent {}

describe('DaffErrorMessageComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffErrorMessageComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-error-message'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-error-message>', () => {
    it('should add a class of "daff-error-message" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-error-message': true,
      }));
    });
  });
});
