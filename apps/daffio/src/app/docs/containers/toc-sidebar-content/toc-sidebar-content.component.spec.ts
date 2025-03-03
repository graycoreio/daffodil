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

import { DaffioDocsTocSidebarContentContainer } from './toc-sidebar-content.component';

describe('DaffioDocsTocSidebarContentContainer', () => {
  let component: DaffioDocsTocSidebarContentContainer;
  let fixture: ComponentFixture<DaffioDocsTocSidebarContentContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DaffioDocsTocSidebarContentContainer,
        RouterTestingModule,
        NoopAnimationsModule],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsTocSidebarContentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
