
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
import { of } from 'rxjs';

import { DaffioDocsPackageCardsContainer } from './package-cards.component';
import { DaffioDocsIndexService } from '../../../index/index.service';

describe('DaffioDocsPackageCardsContainer', () => {
  let component: DaffioDocsPackageCardsContainer;
  let fixture: ComponentFixture<DaffioDocsPackageCardsContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioDocsPackageCardsContainer,
      ],
      imports: [RouterTestingModule,
        NoopAnimationsModule],
      providers: [
        {
          provide: DaffioDocsIndexService,
          useValue: jasmine.createSpyObj('DaffioDocsIndexService', { getList: of() }),
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsPackageCardsContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
