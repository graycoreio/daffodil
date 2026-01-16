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
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffTreeComponent,
  DaffTreeModule,
} from '@daffodil/design/tree';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { SidebarListComponent } from './sidebar-list.component';

@Component({
  template: '<demo-sidebar-list [tree]="tree"></demo-sidebar-list>',
  standalone: false,
})
class WrapperComponent {
  tree: DaffNavigationTree;
}

describe('SidebarListComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: SidebarListComponent;
  let de: DebugElement;
  let tree: DaffNavigationTree;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffTreeModule,
      ],
      declarations: [
        WrapperComponent,
        SidebarListComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    tree = navigationTreeFactory.create();
    wrapper.tree = tree;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('demo-sidebar-list'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take tree as input', () => {
    expect(component.tree).toEqual(wrapper.tree);
  });

  it('should transform the navigation tree to DaffTreeData', () => {
    expect(component.treeData).toBeTruthy();
    expect(component.treeData.title).toEqual(tree.name);
    expect(component.treeData.url).toEqual(tree.url);
    expect(component.treeData.id).toEqual(tree.id);
  });

  it('should render a daff-tree', () => {
    const daffTree = de.query(By.directive(DaffTreeComponent));
    expect(daffTree).toBeTruthy();
  });

  it('should pass the transformed tree data to daff-tree', () => {
    const daffTree = de.query(By.directive(DaffTreeComponent));
    expect(daffTree.componentInstance.tree).toEqual(component.treeData);
  });
});
