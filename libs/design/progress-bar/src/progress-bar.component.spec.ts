import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffPalette } from '@daffodil/design';

import { DaffProgressBarComponent } from './progress-bar.component';

@Component({
  template: `
  <daff-progress-bar [color]="color" [percentage]="percentage" (finished)="onTransitionEnd()">
  </daff-progress-bar>
  `,
  imports: [
    DaffProgressBarComponent,
  ],
})
class WrapperComponent {
  color: DaffPalette;
  percentage: number;
  onTransitionEnd(): void {};
}

describe('DaffProgressBarComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffProgressBarComponent;
  let progressBar: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-progress-bar'));
    component = de.componentInstance;
    progressBar = fixture.debugElement.query(By.directive(DaffProgressBarComponent));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-progress-bar" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-progress-bar': true,
    }));
  });

  it('should be able to take `percentage` as an input', () =>{
    wrapper.percentage = 20;
    fixture.detectChanges();

    expect(component.percentage).toEqual(20);
  });

  it('should emit `finished` when the progress bar is filled and the animation is complete', () => {
    wrapper.percentage = 100;
    spyOn(wrapper, 'onTransitionEnd');

    fixture.detectChanges();

    const determinateBar = fixture.debugElement.query(By.css('.determinate-bar'));
    const transitionEvent = new TransitionEvent('transitionend', {
      propertyName: 'transform',
      elapsedTime: 1,
    });

    determinateBar.nativeElement.dispatchEvent(transitionEvent);
    fixture.detectChanges();

    expect(wrapper.onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('should be unfilled by default', () => {
    wrapper.percentage = 0;
    fixture.detectChanges();

    expect(component.percentage).toEqual(0);
  });

  describe('color property', () => {
    it('should take color as an input', () => {
      expect(progressBar.componentInstance.color).toEqual(wrapper.color);
    });

    it('should set the default color to primary', () => {
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });
});
