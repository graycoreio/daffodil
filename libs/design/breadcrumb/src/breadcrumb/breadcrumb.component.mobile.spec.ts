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

import {
  DaffBreadcrumbComponent,
  DaffBreadcrumbItemComponent,
} from '@daffodil/design/breadcrumb';

@Component({
  template: `
    <ol daff-breadcrumb>
      <li daffBreadcrumbItem><a href="/">Home</a></li>
      <li daffBreadcrumbItem><a href="/cat">Category</a></li>
      <li daffBreadcrumbItem><a href="/cat/sub">Subcategory</a></li>
      <li daffBreadcrumbItem><a href="/cat/sub/curr">Current</a></li>
    </ol>
  `,
  imports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemComponent,
  ],
})
class WrapperComponentWithFourItems {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbComponent mobile', () => {
  let breadcrumbComponent: DaffBreadcrumbComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponentWithFourItems>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponentWithFourItems,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponentWithFourItems);
    de = fixture.debugElement.query(By.css('ol[daff-breadcrumb]'));
    breadcrumbComponent = de.componentInstance;

    fixture.detectChanges();
  });

  beforeEach(() => {
    spyOn(DaffBreadcrumbItemComponent.prototype, 'setActive').and.callThrough();
  });

  it('should render 4 breadcrumb items', () => {
    const breadcrumbItems = breadcrumbComponent._breadcrumbItems();
    expect(breadcrumbItems.length).toBe(4);
  });

  it('should compute 4 breadcrumb items', () => {
    expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(4);
  });

  it('mobile menu should contain all items except the last one', () => {
    const mobileMenuItems = breadcrumbComponent._mobileMenuItems();
    const allBreadcrumbItems = breadcrumbComponent._breadcrumbItems();
    expect(mobileMenuItems.length).toBe(3);
    expect(mobileMenuItems).toEqual(allBreadcrumbItems.slice(0, allBreadcrumbItems.length - 1));
  });

  it('should have the active class only on the last breadcrumb item', () => {
    const items = breadcrumbComponent._breadcrumbItems();
    const nonLastItems = items.slice(0, items.length - 1);
    const lastItem = items[items.length - 1];

    nonLastItems.forEach(item => {
      expect(item._active).toBe(false);
    });

    expect(lastItem._active).toBe(true);
  });
});
