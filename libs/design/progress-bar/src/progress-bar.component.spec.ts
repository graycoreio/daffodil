import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  flush,
  fakeAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffPalette } from '@daffodil/design';

import { DaffProgressBarComponent } from './progress-bar.component';

@Component({
  template: `
  <daff-progress-bar [color]="color" [percentage]="percentage" (finished)="onAnimationComplete()">
  </daff-progress-bar>
  `,
  imports: [
    DaffProgressBarComponent,
  ],
})
class WrapperComponent {
  color: DaffPalette;
  percentage: number;
  onAnimationComplete(): void {};
}

describe('DaffProgressBarComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffProgressBarComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-progress-bar>', () => {
    it('should add a class of "daff-progress-bar" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-progress-bar': true,
      }));
    });
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
    spyOn(wrapper, 'onAnimationComplete');

    fixture.detectChanges();
    flush();

    expect(wrapper.onAnimationComplete).toHaveBeenCalledTimes(1);
  }));

  it('should be unfilled by default', () => {
    wrapper.percentage = 0;
    fixture.detectChanges();

    expect(component.percentage).toEqual(0);
  });

  describe('using a colored variant of a progress bar', () => {
    it('should set a color class on the progress bar', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should set the default color to primary', () => {
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });
});
