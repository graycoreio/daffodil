import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffButtonComponent } from './button.component';
import { DaffPalette } from '../../core/colorable/colorable';

@Component({
  template: `
    <a daff-button [color]="color">Link Daff Button</a>
    <a daff-stroked-button [color]="color">Link Daff Stroked Button</a>
    <a daff-raised-button [color]="color">Link Daff Raised Button</a>
    <a daff-icon-button [color]="color">Link Daff Icon Button</a>
    <button daff-button [color]="color">Button Daff Button</button>
    <button daff-stroked-button [color]="color">Button Daff Stroked Button</button>
    <button daff-raised-button [color]="color">Button Daff Raised Button</button>
    <button daff-icon-button [color]="color">Button Daff Icon Button</button>
  `
})

class WrapperComponent {
  color: DaffPalette;
}

describe('DaffButtonComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffButtonComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daff-button]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('daff-button', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-button]'));
    });

    it('should add a class of "daff-button" to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-button': true,
      }));
    });
    });

  describe('daff-stroked-button', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-stroked-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-stroked-button]'));
  });

    it('should add a class of `daff-stroked-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-stroked-button': true,
      }));
    });
    });

  describe('daff-raised-button', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-raised-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-raised-button]'));
  });

    it('should add a class of `daff-raised-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-raised-button': true,
      }));
    });
  });

  describe('daff-icon-button', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-icon-button]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-icon-button]'));
    });

    it('should add a class of `daff-icon-button` to its host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-icon-button': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-icon-button': true,
      }));
    });
  }); 

  describe('using a colored variant of a button',() => {
    let buttonDE;

  describe('using a colored variant of a button', () => {
    it('should set a color class on the button', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();
      
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should set the default color to the contrasting theme color', () => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-button]'));
      expect(buttonDE.nativeElement.classList.contains('daff-theme-contrast')).toEqual(true);
    });
  });
});
