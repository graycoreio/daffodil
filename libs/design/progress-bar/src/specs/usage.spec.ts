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
import { DaffProgressBarComponent } from '@daffodil/design/progress-bar';

@Component({
  template: `
    <daff-progress-bar
      [color]="color"
      [percentage]="percentage"
      [aria-label]="ariaLabel"
      [indeterminate]="indeterminate"
      (finished)="onTransitionEnd()">
    </daff-progress-bar>
  `,
  imports: [
    DaffProgressBarComponent,
  ],
})
class WrapperComponent {
  color: DaffPalette;
  percentage: number;
  ariaLabel: string;
  id: string;
  indeterminate = false;
  onTransitionEnd(): void {};
}

describe('@daffodil/design/progress-bar | DaffProgressBarComponent | Usage', () => {
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

  it('should be able to take `percentage` as an input', () =>{
    wrapper.percentage = 20;
    fixture.detectChanges();

    expect(component.percentage).toEqual(20);
  });

  it('should be able to take `aria-label` as an input', () =>{
    wrapper.ariaLabel = 'file upload';
    fixture.detectChanges();

    expect(component.ariaLabel).toEqual('file upload');
  });

  it('should add a class of `indeterminate` to the host when indeterminate is true', () => {
    wrapper.indeterminate = true;
    fixture.detectChanges();

    expect(de.classes['indeterminate']).toBeTrue();
  });

  it('should emit `finished` when the progress bar is filled and the transition is complete', () => {
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

  describe('color property', () => {
    it('should take color as an input', () => {
      expect(progressBar.componentInstance.color).toEqual(wrapper.color);
    });
  });
});
