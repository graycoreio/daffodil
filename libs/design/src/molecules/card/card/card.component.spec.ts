import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffCardComponent } from './card.component';

import { DaffPalette } from '../../../core/colorable/colorable';

@Component ({
  template: `<daff-card [color]="color"></daff-card>`
})

class WrapperComponent {
  color: DaffPalette;
}

describe('DaffCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCardComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-card'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-card>', () => {
    it('should add a class of "daff-card" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card': true,
      }));
    });
  });

  describe('using a color variant of a card', () => {
    it('should set a color class on the card', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});
