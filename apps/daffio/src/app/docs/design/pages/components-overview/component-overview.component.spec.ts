import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsDesignComponentOverviewPageComponent } from './component-overview.component';

describe('DaffioDocsDesignComponentOverviewPageComponent', () => {
  let component: DaffioDocsDesignComponentOverviewPageComponent;
  let fixture: ComponentFixture<DaffioDocsDesignComponentOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsDesignComponentOverviewPageComponent,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsDesignComponentOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
