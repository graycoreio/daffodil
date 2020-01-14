import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { DaffButtonSetComponent } from './button-set.component';
import { By } from '@angular/platform-browser';

@Component ({
  template: `<daff-button-set></daff-button-set>`
})

class WrapperComponent {}

describe('DaffButtonSetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffButtonSetComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffButtonSetComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-button-set'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-button-set>', () => {
    it('should add a class of "daff-button-set" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-button-set': true,
      }));
    });
  });
});
