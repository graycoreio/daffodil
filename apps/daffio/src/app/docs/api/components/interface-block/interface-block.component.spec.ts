import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffioDocsApiInterfaceBlockComponent } from './interface-block.component';

describe('DaffioDocsApiInterfaceBlockComponent', () => {
  let component: DaffioDocsApiInterfaceBlockComponent;
  let fixture: ComponentFixture<DaffioDocsApiInterfaceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffioDocsApiInterfaceBlockComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffioDocsApiInterfaceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
