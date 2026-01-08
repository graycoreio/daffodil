import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsStorefrontOverviewPageComponent } from './overview.component';

describe('DaffioDocsStorefrontOverviewPageComponent', () => {
  let component: DaffioDocsStorefrontOverviewPageComponent;
  let fixture: ComponentFixture<DaffioDocsStorefrontOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsStorefrontOverviewPageComponent,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsStorefrontOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
