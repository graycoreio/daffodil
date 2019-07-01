import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { DaffCalloutComponent, DaffCalloutLayout } from './callout.component';
import { DaffPalette } from '../../../core/colorable/colorable';

@Component ({
  template: `
    <daff-callout [layout]="layout" [color]="color"></daff-callout>
  `
})

class WrapperComponent {
  layout: DaffCalloutLayout;
  color: DaffPalette;
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

  describe('setting the layout of a callout', () => {
    describe('when layout is centered', () => {
      it('should set "daff-callout--centered" on host element', () => {
        wrapper.layout = 'centered';

        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-callout--centered')).toEqual(true);
      });
    });

    it('should not set a default layout', () => {
      expect(calloutComponent.layout).toBeFalsy();
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