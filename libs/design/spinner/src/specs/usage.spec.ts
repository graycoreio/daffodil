import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_SPINNER_COMPONENTS,
  DaffSpinnerComponent,
} from '@daffodil/design/spinner';

@Component({
  template: '<daff-spinner [aria-label]="ariaLabel()"></daff-spinner>',
  imports: [
    DaffSpinnerComponent,
  ],
})
class WrapperComponent {
  ariaLabel = signal<string>(undefined);
}

describe('@daffodil/design/spinner | DaffSpinnerComponent | Without DaffSpinnerLabelDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    de = fixture.debugElement.query(By.css('daff-spinner'));
    fixture.detectChanges();
  });

  it('should set the aria-label attribute to the provided value', () => {
    wrapper.ariaLabel.set('custom loading message');
    fixture.detectChanges();

    expect(de.nativeElement.getAttribute('aria-label')).toEqual('custom loading message');
  });
});

@Component({
  template: `
    <daff-spinner>
      <daff-spinner-label>Loading content</daff-spinner-label>
    </daff-spinner>`,
  imports: [
    DAFF_SPINNER_COMPONENTS,
  ],
})
class WithLabelWrapperComponent {}

describe('@daffodil/design/spinner | DaffSpinnerComponent | With DaffSpinnerLabelDirective', () => {
  let de: DebugElement;
  let fixture: ComponentFixture<WithLabelWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WithLabelWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithLabelWrapperComponent);
    de = fixture.debugElement.query(By.css('daff-spinner'));
    fixture.detectChanges();
  });

  it('should not set the aria-label attribute when the <daff-spinner-label> is used', () => {
    expect(de.nativeElement.getAttribute('aria-label')).toBeNull();
  });
});
