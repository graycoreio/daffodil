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
    <ol daff-breadcrumb [skeleton]="skeleton">
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
class WrapperComponent {
  skeleton: boolean;
}

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

describe('@daffodil/design/breadcrumb | DaffBreadcrumbComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffBreadcrumbComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        WrapperComponentWithSevenItems,
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

  it('should have the active class only on the last breadcrumb item', () => {
    const items = component._breadcrumbItems();
    const nonLastItems = items.slice(0, items.length - 1);
    const lastItem = items[items.length - 1];

    nonLastItems.forEach(item => {
      expect(item._active).toBe(false);
    });

    expect(lastItem._active).toBe(true);
  });

  describe('when given 4 breadcrumb items', () => {

    it('should compute 5 items total', () => {
      const computed = component._computedBreadcrumbItems();
      expect(computed.length).toBe(5);
    });

    it('should compute 4 breadcrumb items', () => {
      const computed = component._computedBreadcrumbItems();
      expect(computed.filter(item => item.type === 'breadcrumb').length).toBe(4);
    });

    it('should not compute a desktop menu activator', () => {
      const computed = component._computedBreadcrumbItems();
      const desktopActivator = computed.find(item => item.type === 'menu' && item.target === 'desktopMenu');
      expect(desktopActivator).toBeUndefined();
    });

    it('should compute a mobile menu activator', () => {
      const computed = component._computedBreadcrumbItems();
      const mobileActivator = computed.find(item => item.type === 'menu' && item.target === 'mobileMenu');
      expect(mobileActivator).toBeDefined();
    });

    it('should render 4 breadcrumb items', () => {
      const breadcrumbItems = component._breadcrumbItems();
      expect(breadcrumbItems.length).toBe(4);
    });
  });

  describe('when given 7 breadcrumb items', () => {
    let fixture7: ComponentFixture<WrapperComponentWithSevenItems>;

    beforeEach(() => {
      fixture7 = TestBed.createComponent(WrapperComponentWithSevenItems);
      de = fixture7.debugElement.query(By.css('ol[daff-breadcrumb]'));
      component = de.componentInstance;
      fixture7.detectChanges();
    });

    it('should compute 6 items total', () => {
      const computed = component._computedBreadcrumbItems();
      expect(computed.length).toBe(6);
    });

    it('should compute the first 2 and last 2 breadcrumb items', () => {
      const allItems = component._breadcrumbItems();
      const computedBreadcrumbs = component._computedBreadcrumbItems()
        .filter(item => item.type === 'breadcrumb')
        .map(item => item.item);
      expect(computedBreadcrumbs).toEqual([
        allItems[0],
        allItems[1],
        allItems[allItems.length - 2],
        allItems[allItems.length - 1],
      ]);
    });

    it('should compute a desktop menu activator', () => {
      const computed = component._computedBreadcrumbItems();
      const desktopActivator = computed.find(item => item.type === 'menu' && item.target === 'desktopMenu');
      expect(desktopActivator).toBeDefined();
    });

    it('should compute a mobile menu activator', () => {
      const computed = component._computedBreadcrumbItems();
      const mobileActivator = computed.find(item => item.type === 'menu' && item.target === 'mobileMenu');
      expect(mobileActivator).toBeDefined();
    });

    it('should render 7 breadcrumb items', () => {
      const breadcrumbItems = component._breadcrumbItems();
      expect(breadcrumbItems.length).toBe(7);
    });

    it('desktop menu should contain all items except first 2 and last 2', () => {
      const desktopItems = component._desktopMenuItems();
      const allItems = component._breadcrumbItems();
      expect(desktopItems.length).toBe(3);
      expect(desktopItems[0]).toBe(allItems[2]);
      expect(desktopItems[1]).toBe(allItems[3]);
      expect(desktopItems[2]).toBe(allItems[4]);
    });
  });
});
