import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffioDocsApiPropertyBlockComponent } from './property-block.component';

describe('DaffioDocsApiPropertyBlockComponent', () => {
  let component: DaffioDocsApiPropertyBlockComponent;
  let fixture: ComponentFixture<DaffioDocsApiPropertyBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffioDocsApiPropertyBlockComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffioDocsApiPropertyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
