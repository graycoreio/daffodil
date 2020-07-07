import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffMessageBarComponent } from './message-bar.component';

@Component ({
  template: `<daff-message-bar [flush]="false"></daff-message-bar>`
})

class WrapperComponent {
  flush = false;
}

describe('DaffMessageBarComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffMessageBarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffMessageBarComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-message-bar'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-message-bar>', () => {
    it('should add a class of "daff-message-bar" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-message-bar': true,
      }));
    });
  });

  describe('making a <daff-message-bar> appear flush to its parent container', () => {
    it('should add a class of "daff-message-bar--flush" when flush is true', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-message-bar--flush': false,
      }));

      wrapper.flush = true;
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-message-bar--flush': true,
      }));
    });
  });
});
