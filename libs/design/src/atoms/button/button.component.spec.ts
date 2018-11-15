import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DaffPalette } from '../../core/colorable/colorable';

@Component({
  template: `
    <a daff-button [color]="color">Link Daff Button</a>
    <a daff-clear-button [color]="color">Link Daff Clear Button</a>
    <a daff-stroked-button [color]="color">Link Daff Stroked Button</a>
    <a daff-icon-button [color]="color">Link Daff Icon Button</a>
    <button daff-button [color]="color">Button Daff Button</button>
    <button daff-clear-button [color]="color">Button Daff Clear Button</button>
    <button daff-stroked-button [color]="color">Button Daff Stroked Button</button>
    <button daff-icon-button [color]="color">Button Daff Icon Button</button>
  `
})
class TestButtonWrapper {
  color: DaffPalette;
}

describe('DaffButtonComponent', () => {
  let component: TestButtonWrapper;
  let fixture: ComponentFixture<TestButtonWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffButtonComponent,
        TestButtonWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('daff-button',() => {
    it('should add a class of `daff-button` to its host element', () => {
      expect(fixture.debugElement.query(By.css('a[daff-button]')).nativeElement.classList.contains('daff-button')).toEqual(true);

      expect(fixture.debugElement.query(By.css('button[daff-button]')).nativeElement.classList.contains('daff-button')).toEqual(true);
    });
  });

  describe('daff-clear-button',() => {
    it('should add a class of `daff-clear-button` to its host element', () => {
      expect(fixture.debugElement.query(By.css('a[daff-clear-button]')).nativeElement.classList.contains('daff-clear-button')).toEqual(true);

      expect(fixture.debugElement.query(By.css('button[daff-clear-button]')).nativeElement.classList.contains('daff-clear-button')).toEqual(true);
    });
  });

  describe('daff-stroked-button',() => {
    it('should add a class of `daff-stroked-button` to its host element', () => {
      expect(fixture.debugElement.query(By.css('a[daff-stroked-button]')).nativeElement.classList.contains('daff-stroked-button')).toEqual(true);

      expect(fixture.debugElement.query(By.css('button[daff-stroked-button]')).nativeElement.classList.contains('daff-stroked-button')).toEqual(true);
    });
  });

  describe('daff-icon-button', () => {
    it('should add a class of `daff-icon-button` to its host element', () => {
      expect(fixture.debugElement.query(By.css('a[daff-icon-button]')).nativeElement.classList.contains('daff-icon-button')).toEqual(true);

      expect(fixture.debugElement.query(By.css('button[daff-icon-button]')).nativeElement.classList.contains('daff-icon-button')).toEqual(true);
    });
  }); 

  describe('using a colored variant of a button',() => {
    it('should set a color class on the button', () => {
      component.color = "primary";
      fixture.detectChanges();
      
      let buttonDE = fixture.debugElement.query(By.css('button[daff-button]'));
      expect(buttonDE.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });
});
