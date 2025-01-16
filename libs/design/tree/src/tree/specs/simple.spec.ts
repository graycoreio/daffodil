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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render nothing', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain(`<ul daff-tree="" class="daff-ae daff-tree"`);
  });

  it('should render nothing when data is provided with no templates', () => {
    wrapper.data = { title: '', url: '', id: '', items: [], data: {}};
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toContain(`<ul daff-tree="" class="daff-ae daff-tree"`);
  });
});
