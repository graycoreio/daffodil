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

import { DaffBreadcrumbComponent } from './breadcrumb.component';

@Component({
  template: `<ol daff-breadcrumb [skeleton]="skeleton"></ol>`,
  imports: [
    DaffBreadcrumbComponent,
  ],
})

class WrapperComponent {
  skeleton: boolean;
}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffBreadcrumbComponent;
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
    de = fixture.debugElement.query(By.css('ol[daff-breadcrumb]'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-breadcrumb" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-breadcrumb': true,
    }));
  });

  it('should take skeleton as an input', () => {
    wrapper.skeleton = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });
});
