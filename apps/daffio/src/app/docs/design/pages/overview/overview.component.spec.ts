import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffioDocsDesignOverviewPageComponent } from './overview.component';

describe('DaffioDocsDesignOverviewPageComponent', () => {
  let component: DaffioDocsDesignOverviewPageComponent;
  let fixture: ComponentFixture<DaffioDocsDesignOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsDesignOverviewPageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsDesignOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
