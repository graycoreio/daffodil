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
import { DaffBreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  template: `<ol daff-breadcrumb [skeleton]="skeleton"></ol>`,
  imports: [
    DaffBreadcrumbComponent,
  ],
})

class WrapperComponent {
  skeleton: boolean;
}

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
class WrapperComponentWith4Items {}

@Component({
  template: `
    <ol daff-breadcrumb>
      <li daffBreadcrumbItem><a href="/">Home</a></li>
      <li daffBreadcrumbItem><a href="/l1">Level 1</a></li>
      <li daffBreadcrumbItem><a href="/l1/l2">Level 2</a></li>
      <li daffBreadcrumbItem><a href="/l1/l2/l3">Level 3</a></li>
      <li daffBreadcrumbItem><a href="/l1/l2/l3/curr">Current</a></li>
    </ol>
  `,
  imports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemComponent,
  ],
})
class WrapperComponentWith5Items {}

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
class WrapperComponentWith7Items {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffBreadcrumbComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        WrapperComponentWith4Items,
        WrapperComponentWith5Items,
        WrapperComponentWith7Items,
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

  beforeEach(() => {
    spyOn(DaffBreadcrumbItemComponent.prototype, 'setActive').and.callThrough();
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

  describe('when less than 5 breadcrumb items', () => {
    let fixture4: ComponentFixture<WrapperComponentWith4Items>;
    let breadcrumbComponent: DaffBreadcrumbComponent;
    let de4: DebugElement;

    beforeEach(() => {
      fixture4 = TestBed.createComponent(WrapperComponentWith4Items);
      de4 = fixture4.debugElement.query(By.css('ol[daff-breadcrumb]'));
      breadcrumbComponent = de4.componentInstance;
      fixture4.detectChanges();
    });

    it('should render 4 breadcrumb items', () => {
      const breadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(breadcrumbItems.length).toBe(4);
    });

    it('should compute 5 breadcrumb items', () => {
      expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(5);
    });

    it('partial menu should be empty', () => {
      expect(breadcrumbComponent._partialMenuItems().length).toBe(0);
    });

    it('full menu should contain all items except the last one', () => {
      const fullMenuItems = breadcrumbComponent._fullMenuItems();
      const allBreadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(fullMenuItems.length).toBe(3);
      expect(fullMenuItems).toEqual(allBreadcrumbItems.slice(0, allBreadcrumbItems.length - 1));
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

  describe('when exactly 5 breadcrumb items', () => {
    let fixture5: ComponentFixture<WrapperComponentWith5Items>;
    let breadcrumbComponent: DaffBreadcrumbComponent;
    let de5: DebugElement;

    beforeEach(() => {
      fixture5 = TestBed.createComponent(WrapperComponentWith5Items);
      de5 = fixture5.debugElement.query(By.css('ol[daff-breadcrumb]'));
      breadcrumbComponent = de5.componentInstance;
      fixture5.detectChanges();
    });

    it('should compute 6 breadcrumb items', () => {
      expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(6);
    });

    it('partial menu should contain all items except first 2 and last 2', () => {
      expect(breadcrumbComponent._partialMenuItems().length).toBe(1);
      expect(breadcrumbComponent._partialMenuItems()[0]).toBe(breadcrumbComponent._breadcrumbItems()[2]);
    });

    it('full menu should contain all items except the last one', () => {
      const fullMenuItems = breadcrumbComponent._fullMenuItems();
      const allBreadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(fullMenuItems.length).toBe(4);
      expect(fullMenuItems).toEqual(allBreadcrumbItems.slice(0, allBreadcrumbItems.length - 1));
    });
  });

  describe('when more than 5 breadcrumb items', () => {
    let fixture7: ComponentFixture<WrapperComponentWith7Items>;
    let breadcrumbComponent: DaffBreadcrumbComponent;
    let de7: DebugElement;

    beforeEach(() => {
      fixture7 = TestBed.createComponent(WrapperComponentWith7Items);
      de7 = fixture7.debugElement.query(By.css('ol[daff-breadcrumb]'));
      breadcrumbComponent = de7.componentInstance;
      fixture7.detectChanges();
    });

    it('should compute 6 breadcrumb items', () => {
      expect(breadcrumbComponent._computedBreadcrumbItems().length).toBe(6);
    });

    it('partial menu should contain all items except first 2 and last 2', () => {
      const partialItems = breadcrumbComponent._partialMenuItems();
      const allItems = breadcrumbComponent._breadcrumbItems();
      expect(partialItems.length).toBe(3);
      expect(partialItems[0]).toBe(allItems[2]);
      expect(partialItems[1]).toBe(allItems[3]);
      expect(partialItems[2]).toBe(allItems[4]);
    });

    it('full menu should contain all items except the last one', () => {
      const fullMenuItems = breadcrumbComponent._fullMenuItems();
      const allBreadcrumbItems = breadcrumbComponent._breadcrumbItems();
      expect(fullMenuItems.length).toBe(6);
      expect(fullMenuItems).toEqual(allBreadcrumbItems.slice(0, allBreadcrumbItems.length - 1));
    });
  });
});
