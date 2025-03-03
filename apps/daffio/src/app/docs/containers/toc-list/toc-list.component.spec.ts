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

import { DaffioDocsTocListContainer } from './toc-list.component';

describe('DaffioDocsTocListContainer', () => {
  let component: DaffioDocsTocListContainer;
  let fixture: ComponentFixture<DaffioDocsTocListContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DaffioDocsTocListContainer,
        RouterTestingModule,
        NoopAnimationsModule],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsTocListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
