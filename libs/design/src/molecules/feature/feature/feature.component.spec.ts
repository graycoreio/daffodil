import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffFeatureComponent, DaffFeatureMode, DaffFeatureModeEnum } from './feature.component';

@Component({
  template: `<daff-feature [mode]="mode"></daff-feature>`
})

class WrapperComponent {
  mode: DaffFeatureMode;
}

fdescribe('DaffFeatureComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffFeatureComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-feature'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-feature` to its host', () => {
    expect(de.nativeElement.classList.contains('daff-feature')).toBeTruthy();
  });

  describe('setting the mode of the feature', () => {
    it('should set default mode to normal', () => {
      wrapper.mode = DaffFeatureModeEnum.Normal;
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-feature--normal')).toEqual(true);
    });

    describe('when mode is compact', () => {
      it('should set "daff-feature--compact" on host element', () => {
        wrapper.mode = DaffFeatureModeEnum.Compact;
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-feature--compact')).toEqual(true);
      });
    });

    describe('when mode is normal', () => {
      it('should set "daff-feature--normal" on host element', () => {
        wrapper.mode = DaffFeatureModeEnum.Normal;
        fixture.detectChanges();
  
        expect(de.nativeElement.classList.contains('daff-feature--normal')).toEqual(true);
      });
    });

    describe('when mode is undefined', () => {
      it('should set "daff-feature--normal" as default', () => {
        wrapper.mode = DaffFeatureModeEnum.Normal;
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-feature--normal')).toEqual(true);
      });
    });
  });
});
