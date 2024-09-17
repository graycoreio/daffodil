import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsListContainer } from './docs-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DaffioDocsListContainer', () => {
  let component: DaffioDocsListContainer;
  let fixture: ComponentFixture<DaffioDocsListContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [DaffioDocsListContainer,
        RouterTestingModule,
        NoopAnimationsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
