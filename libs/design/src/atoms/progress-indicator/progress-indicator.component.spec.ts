import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffPalette } from '../../core/colorable/colorable';

import { DaffProgressIndicatorComponent } from './progress-indicator.component';

@Component({
  template: `
  <daff-progress-indicator [color]="color" [percentage]="percentage" (finished)="onComplete()">
  </daff-progress-indicator>
  `
})
class WrapperComponent {
  color: DaffPalette;
  percentage: number;
  onComplete(): void {};
}

describe('DaffProgressIndicatorComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffProgressIndicatorComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        WrapperComponent,
        DaffProgressIndicatorComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-progress-indicator'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take `percentage` as an input', () =>{
    wrapper.percentage = 20;
    fixture.detectChanges();
    expect(component.percentage).toEqual(20);
  });

  /**
   * This needs to be in a fakeAsync as there are animationFrames being processed
   */
  it('should emit `finished` when the progress bar is filled and the animation is complete', fakeAsync(() => {
    wrapper.percentage = 100;
    spyOn(wrapper, 'onComplete');
   
    fixture.detectChanges();
    flush();

    expect(wrapper.onComplete).toHaveBeenCalledTimes(1);
  }));

  it('should be unfilled by default', () => {
    expect(component.percentage).toEqual(0);
  });

  it('should be colorable', () => {
    wrapper.color = "primary";
    fixture.detectChanges();
    expect(component.color).toEqual("primary");
    expect(de.nativeElement).toHaveClass("daff-primary");
  });
});
