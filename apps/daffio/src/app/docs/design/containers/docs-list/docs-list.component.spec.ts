import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsDesignListContainer } from './docs-list.component';

describe('DaffioDocsDesignListContainer', () => {
  let component: DaffioDocsDesignListContainer;
  let fixture: ComponentFixture<DaffioDocsDesignListContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DaffioDocsDesignListContainer,
        RouterTestingModule,
        NoopAnimationsModule],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsDesignListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
