import {
  Component,
  Input,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffTreeData } from '@daffodil/design/tree';

import { DaffTreeComponent } from '../tree.component';

@Component({
  template: `
    <ul daff-tree [tree]="data"></ul>
  `,
  imports: [
    DaffTreeComponent,
  ],
})
class WrapperComponent {
  @Input() data: DaffTreeData<any>;
}

describe('@daffodil/design/tree | DaffTreeComponent | Simple', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let el: HTMLElement;

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
    el = fixture.nativeElement.querySelector('ul[daff-tree]');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render nothing', () => {
    expect(el).toBeTruthy();
    expect(el.children.length).toBe(0);
  });

  it('should render nothing within the tree when data is provided with no templates', () => {
    wrapper.data = { title: '', url: '', id: '', items: [], data: {}};
    fixture.detectChanges();

    expect(el).toBeTruthy();
    expect(el.children.length).toBe(0);
  });
});
