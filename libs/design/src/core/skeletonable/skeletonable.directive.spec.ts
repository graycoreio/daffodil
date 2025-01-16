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

import { DaffSkeletonableDirective } from './skeletonable.directive';

@Component({
  template: `
		<div daffSkeletonable
			[skeleton]="skeleton">
		</div>`,
  standalone: false,
})

class WrapperComponent {
  skeleton: boolean;
}

describe('@daffodil/design | DaffSkeletonableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffSkeletonableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffSkeletonableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffSkeletonable]'));
    directive = de.injector.get(DaffSkeletonableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take skeleton as an input', () => {
    expect(directive.skeleton).toEqual(wrapper.skeleton);
  });

  it('should add a class of "daff-skeleton" to the host element when skeleton is true', () => {
    wrapper.skeleton = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-skeleton': true,
    }));
  });

  it('should not add a class of "daff-skeleton" to the host element when skeleton is false', () => {
    expect(de.classes['daff-skeleton']).toBeUndefined();
  });
});
