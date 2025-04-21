import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffioDocsApiMethodBlockComponent } from './method-block.component';

describe('DaffioDocsApiMethodBlockComponent', () => {
  let component: DaffioDocsApiMethodBlockComponent;
  let fixture: ComponentFixture<DaffioDocsApiMethodBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffioDocsApiMethodBlockComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffioDocsApiMethodBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
