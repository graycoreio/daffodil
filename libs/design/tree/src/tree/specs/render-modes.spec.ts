import {
  Component,
  Input,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTreeData } from '../../interfaces/tree-data';
import { DaffTreeRenderMode } from '../../interfaces/tree-render-mode';
import { DaffTreeComponent } from '../tree.component';

@Component({
  template: `
    <ul daff-tree [tree]="data" [renderMode]="renderMode">
      <ng-template #daffTreeItemWithChildrenTpl let-node>
          <button daffTreeItem [node]="node">{{ node.title }} </button>
      </ng-template>

      <ng-template #daffTreeItemTpl let-node>
          <a daffTreeItem [node]="node" href="node.url">{{ node.title }}</a>
      </ng-template>
    </ul>
  `,
  imports: [
    DaffTreeComponent,
  ],
})
class WrapperComponent {
  @Input() data: DaffTreeData<any>;
  @Input() renderMode: DaffTreeRenderMode;
}


describe('@daffodil/design/tree | DaffTreeComponent | renderModes', () => {
  let wrapper: WrapperComponent;
  let component: DaffTreeComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('ul[daff-tree]')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render two nodes when renderMode is `not-in-dom`', () => {
    wrapper.data = { title: 'Root', url: '', id: '', items: [
      { title: 'Child A', url: '', id: '', items: [
        { title: 'Child Aa', url: '', id: '', items: [], data: {}},
      ], data: {}},
      { title: 'Child B', url: '', id: '', items: [], data: {}},
    ], data: {}};
    wrapper.renderMode = 'not-in-dom';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toEqual(2);
  });

  it('should render three nodes when renderMode is `in-dom`', () => {
    wrapper.data = { title: 'Root', url: '', id: '', items: [
      { title: 'Child A', url: '', id: '', items: [
        { title: 'Child Aa', url: '', id: '', items: [], data: {}},
      ], data: {}},
      { title: 'Child B', url: '', id: '', items: [], data: {}},
    ], data: {}};
    wrapper.renderMode = 'in-dom';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toEqual(3);
  });
});
