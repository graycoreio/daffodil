import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffListComponent, DaffListMode } from './list.component';

@Component({
  template: `<daff-list [mode]="mode"></daff-list>`
})
class WrapperComponent {
  mode: DaffListMode;
}

describe('DaffListComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffListComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-list'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-list>', () => {
    it('should add a class of "daff-list" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-list': true,
      }));
    });
  });

  describe('setting the mode', () => {
    it('should not set a default mode', () => {
      expect(component.mode).toBeFalsy();
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-list--multi-line': false,
      }));
    });

    describe('when mode="multi-line"', () => {
      it('should add a class of "daff-list--multi-line" to the host element', () => {
        wrapper.mode = 'multi-line';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-list--multi-line': true
        }));
      });
    });

    describe('when mode="link"', () => {
      it('should add a class of "daff-list--link" to the host element', () => {
        wrapper.mode = 'link';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-list--link': true
        }));
      });
    });

    describe('when mode="navigation"', () => {
      it('should add a class of "daff-list--navigation" to the host element', () => {
        wrapper.mode = 'navigation';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-list--navigation': true
        }));
      });
    });
  });
});
