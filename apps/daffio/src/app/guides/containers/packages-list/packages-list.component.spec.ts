import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsPackagesListContainer } from './packages-list.component';

describe('DaffioDocsPackagesListContainer', () => {
  let component: DaffioDocsPackagesListContainer;
  let fixture: ComponentFixture<DaffioDocsPackagesListContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioDocsPackagesListContainer,
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPackagesListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
