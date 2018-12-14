import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DaffCalloutComponent } from './callout.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { DaffPalette } from '../../core/colorable/colorable';

@Component ({
  template: `
    <daff-callout [layout]="layout" [size]="size" [color]="color"></daff-callout>
  `
})
class Wrapper {
  color: DaffPalette;
  layout: string;
  size: string;
}

describe('DaffCalloutComponent', () => {
  let wrapper: Wrapper;
  let component: DaffCalloutComponent;
  let fixture: ComponentFixture<Wrapper>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Wrapper,
        DaffCalloutComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-callout')).componentInstance;
    de = fixture.debugElement.query(By.css('daff-callout'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('using a layout variant of a callout', () => {
    it('should set a layout class on the callout', () => {
      wrapper.layout = "centered";
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-callout--centered')).toEqual(true);
    });

    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
    });
  });

  describe('using a size variant of a callout', () => {
    it('should set a size class on the callout', () => {
      wrapper.size = "small";
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-callout--small')).toEqual(true);
    });

    it('should not set a default size', () => {
      expect(component.size).toBeFalsy();
    });
  });

  describe('using a colored variant of a callout',() => {
    it('should set a color class on the callout', () => {
      wrapper.color = "primary";
      fixture.detectChanges();
      
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});