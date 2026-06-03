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

import { DaffBreadcrumbItemComponent } from '@daffodil/design/breadcrumb';

@Component({
  template: `<li daffBreadcrumbItem>Breadcrumb Item</li>`,
  imports: [
    DaffBreadcrumbItemComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbItemComponent', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffBreadcrumbItemComponent;

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
    de = fixture.debugElement.query(By.css('[daffBreadcrumbItem]'));
    component = de.injector.get(DaffBreadcrumbItemComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-breadcrumb__item" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-breadcrumb__item': true,
    }));
  });

  it('should set aria-current="page" when active', () => {
    component.setActive(true);
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    expect(de.nativeElement.getAttribute('aria-current')).toBe('page');
  });
});
