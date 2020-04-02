import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { DaffLinkSetModule } from '@daffodil/design';

import { SidebarListComponent } from './sidebar-list.component';
import { RouterTestingModule } from '@angular/router/testing';

@Component({template: '<demo-sidebar-list [tree]="tree"></demo-sidebar-list>'})
class WrapperComponent {
  tree: DaffNavigationTree;
  closeFunction() {};
}

describe('SidebarListComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let rootSidebarListComponent: SidebarListComponent;
  let rootSidebarListDe: DebugElement;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffLinkSetModule,
        RouterTestingModule
      ],
      declarations: [ 
        WrapperComponent,
        SidebarListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.tree = navigationTreeFactory.create();
    fixture.detectChanges();
    rootSidebarListDe = fixture.debugElement.query(By.css('demo-sidebar-list'));
    rootSidebarListComponent = rootSidebarListDe.componentInstance;
  });

  it('should create', () => {
    expect(rootSidebarListComponent).toBeTruthy();
  });

  it('should take tree as input', () => {
    expect(rootSidebarListComponent.tree).toEqual(wrapper.tree);
  });

  describe('rendering the root of the tree', () => {
    it('should only exactly the children `demo-sidebar-list` of the root ', () => {
      expect(rootSidebarListDe.children.length).toEqual(wrapper.tree.children.length);
    });
  });

  describe('rendering children of the root of the tree', () => {
    it('should set level equal to `1` on the children lists', () => {
      expect(rootSidebarListDe.children.length).toBeTruthy();
      const child = rootSidebarListDe.query(By.css('demo-sidebar-list'));
      expect(child.componentInstance.level).toEqual(1);
    });
  });

  describe('rendering grandchildren of the root of the tree', () => {
    it('should set level equal to `2` on the grandchild lists', () => {
      const grandChildDe = rootSidebarListDe.query(By.css('demo-sidebar-list')).query(By.css('demo-sidebar-list'));
      expect(grandChildDe.componentInstance.level).toEqual(2);
    });
  });
});
