import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffTreeComponent } from './tree.component';

describe('@daffodil/design/tree - DaffTreeComponent', () => {
  let component: DaffTreeComponent;
  let fixture: ComponentFixture<DaffTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
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
});
