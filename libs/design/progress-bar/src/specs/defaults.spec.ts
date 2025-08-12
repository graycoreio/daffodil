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

import { DaffProgressBarComponent } from '@daffodil/design/progress-bar';

@Component({
  template: `
  <daff-progress-bar>
		<daff-progress-bar-label></daff-progress-bar-label>
	</daff-progress-bar>
  `,
  imports: [
    DaffProgressBarComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/progress-bar | DaffProgressBarComponent | Defaults', () => {
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

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-progress-bar-[0-9]*');
  });

  it('should be unfilled by default', () => {
    expect(component.percentage).toEqual(0);
  });

  describe('color property', () => {
    it('should set the default color to primary', () => {
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });
});
