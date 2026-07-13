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

import { DaffStatusableDirective } from '@daffodil/design';
import {
  DAFF_BADGE_COMPONENTS,
  DaffBadgeComponent,
} from '@daffodil/design/badge';

@Component({
  template: `
  <daff-badge>
		Label
	</daff-badge>
  `,
  imports: [
    DAFF_BADGE_COMPONENTS,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/badge | DaffBadgeComponent | Defaults', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffBadgeComponent;
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
    de = fixture.debugElement.query(By.css('daff-badge'));
    component = de.componentInstance;
    progressBar = fixture.debugElement.query(By.directive(DaffBadgeComponent));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-badge" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-badge': true,
    }));
  });

  it('should set the default color to `light`', () => {
    expect(de.nativeElement.classList.contains('daff-light')).toEqual(true);
  });

  it('should set the default appearance to `filled`', () => {
    expect(de.nativeElement.classList.contains('filled')).toEqual(true);
  });

  it('should set the default size to `md`', () => {
    expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
  });

  it('should not set a default status', () => {
    expect(de.injector.get(DaffStatusableDirective).status).toBeFalsy();
  });
});
