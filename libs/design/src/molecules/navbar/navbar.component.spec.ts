import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNavbarComponent } from './navbar.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffPalette } from 'dist/design/public_api';

@Component({ template: '<daff-navbar [color]="color" [shadowed]="shadowed"></ daff-navbar>' })
class WrapperComponent {
  color: DaffPalette = undefined;
  shadowed = false;
}

describe('DaffNavbarComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffNavbarComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('daff-navbar'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a daff-navbar class to the host component', () => {
    expect(de.nativeElement.classList.contains('daff-navbar')).toBeTruthy();
  });

  describe('using a colored variant of a button', () => {
    it('should set a color class on the button', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(de.nativeElement.classList.toString()).toEqual('daff-navbar');
    });
  });

  describe('using a shadowed navbar', () => {
    it('should set `daff-navbar--shadowed` on the host element', () => {
      wrapper.shadowed = true;
      fixture.detectChanges();
      expect(de.componentInstance.shadowClass).toEqual(true);
    })
  })
});
