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

import { DaffBreadcrumbItemDirective } from './breadcrumb-item.directive';

@Component({
  template: `<li daffBreadcrumbItem>Breadcrumb Item</li>`,
  imports: [
    DaffBreadcrumbItemDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbItemDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffBreadcrumbItemDirective;

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
    directive = de.injector.get(DaffBreadcrumbItemDirective);
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
    directive.setActive(true);
    fixture.detectChanges();

    expect(de.nativeElement.getAttribute('aria-current')).toBe('page');
    expect(de.nativeElement.classList).toContain('active');
  });

  it('should have a class of ".active" when active', () => {
    directive.setActive(true);
    fixture.detectChanges();

    expect(de.nativeElement.classList).toContain('active');
  });
});
