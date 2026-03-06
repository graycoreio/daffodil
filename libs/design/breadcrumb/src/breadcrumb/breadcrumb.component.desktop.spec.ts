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

@Component({
  template: `
		<ol daff-breadcrumb>
			<li daffBreadcrumbItem><a href="/">Home</a></li>
			<li daffBreadcrumbItem><a href="/l1">Level 1</a></li>
			<li daffBreadcrumbItem><a href="/l1/l2">Level 2</a></li>
			<li daffBreadcrumbItem><a href="/l1/l2/l3">Level 3</a></li>
			<li daffBreadcrumbItem><a href="/l1/l2/l3/l4">Level 4</a></li>
			<li daffBreadcrumbItem><a href="/l1/l2/l3/l4/l5">Level 5</a></li>
			<li daffBreadcrumbItem><a href="/l1/l2/l3/l4/l5/curr">Current</a></li>
		</ol>
	`,
  imports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemComponent,
  ],
})
class WrapperComponentWithSevenItems {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbComponent desktop', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponentWithFourItems,
        WrapperComponentWithSevenItems,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOn(DaffBreadcrumbItemComponent.prototype, 'setActive').and.callThrough();
  });

  describe('when given 4 breadcrumb items', () => {
    let fixture4: ComponentFixture<WrapperComponentWithFourItems>;
    let breadcrumbComponent: DaffBreadcrumbComponent;
    let de4: DebugElement;

    beforeEach(() => {
      fixture4 = TestBed.createComponent(WrapperComponentWithFourItems);
      de4 = fixture4.debugElement.query(By.css('ol[daff-breadcrumb]'));
      breadcrumbComponent = de4.componentInstance;
      fixture4.detectChanges();
    });

    it('should render 4 breadcrumb items', () => {
      const breadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(breadcrumbItems.length).toBe(4);
    });

    it('should compute 4 breadcrumb items', () => {
      expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(4);
    });

    it('desktop menu should be empty', () => {
      expect(breadcrumbComponent._desktopMenuItems().length).toBe(0);
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

  describe('when given 7 breadcrumb items', () => {
    let fixture7: ComponentFixture<WrapperComponentWithSevenItems>;
    let breadcrumbComponent: DaffBreadcrumbComponent;
    let de7: DebugElement;

    beforeEach(() => {
      fixture7 = TestBed.createComponent(WrapperComponentWithSevenItems);
      de7 = fixture7.debugElement.query(By.css('ol[daff-breadcrumb]'));
      breadcrumbComponent = de7.componentInstance;
      fixture7.detectChanges();
    });

    it('should compute the first 2, last 2 breadcrumb items and an ellipses', () => {
      expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(5);
    });

    it('should render 7 breadcrumb items', () => {
      const breadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(breadcrumbItems.length).toBe(7);
    });

    it('desktop menu should contain all items except first 2 and last 2', () => {
      const desktopItems = breadcrumbComponent._desktopMenuItems();
      const allItems = breadcrumbComponent._breadcrumbItems();
      expect(desktopItems.length).toBe(3);
      expect(desktopItems[0]).toBe(allItems[2]);
      expect(desktopItems[1]).toBe(allItems[3]);
      expect(desktopItems[2]).toBe(allItems[4]);
    });
  });
});
