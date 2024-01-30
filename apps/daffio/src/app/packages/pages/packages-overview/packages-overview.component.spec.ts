import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioPackagesOverviewPageComponent } from './packages-overview.component';

describe('DaffioPackagesOverviewPageComponent', () => {
  let component: DaffioPackagesOverviewPageComponent;
  let fixture: ComponentFixture<DaffioPackagesOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioPackagesOverviewPageComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioPackagesOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
