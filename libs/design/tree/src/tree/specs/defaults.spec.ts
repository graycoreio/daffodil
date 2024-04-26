import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffTreeComponent } from '../tree.component';

describe('@daffodil/design/tree - DaffTreeComponent | Defaults', () => {
  let component: DaffTreeComponent;
  let fixture: ComponentFixture<DaffTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DaffTreeComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sane defaults', () => {
    expect(component.flatTree).toEqual([]);
    expect(component.tree).toEqual(undefined);
  });
});
