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
class WrapperComponent {
  color: DaffPalette;
  layout: string;
  size: string;
}

describe('DaffCalloutComponent', () => {
  let wrapper: WrapperComponent;
  let calloutComponent: DaffCalloutComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffCalloutComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    calloutComponent = fixture.debugElement.query(By.css('daff-callout')).componentInstance;
    de = fixture.debugElement.query(By.css('daff-callout'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(calloutComponent).toBeTruthy();
  });

  describe('using a layout variant of a callout', () => {
    it('should set a layout class on the callout', () => {
      wrapper.layout = "centered";
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-callout--centered')).toEqual(true);
    });

    it('should not set a default layout', () => {
      expect(calloutComponent.layout).toBeFalsy();
    });
  });

  describe('using a size variant of a callout', () => {
    it('should set a size class on the callout', () => {
      wrapper.size = "small";
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-callout--small')).toEqual(true);
    });

    it('should not set a default size', () => {
      expect(calloutComponent.size).toBeFalsy();
    });
  });

  describe('using a colored variant of a callout',() => {
    it('should set a color class on the callout', () => {
      wrapper.color = "primary";
      fixture.detectChanges();
      
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(calloutComponent.color).toBeFalsy();
    });
  });
});