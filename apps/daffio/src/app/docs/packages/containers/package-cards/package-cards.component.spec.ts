
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
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffioDocsPackageCardsContainer } from './package-cards.component';
import { DaffioRoute } from '../../../../core/router/route.type';

describe('DaffioDocsPackageCardsContainer', () => {
  let component: DaffioDocsPackageCardsContainer;
  let fixture: ComponentFixture<DaffioDocsPackageCardsContainer>;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioDocsPackageCardsContainer,
      ],
      imports: [RouterTestingModule,
        NoopAnimationsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: jasmine.createSpyObj('ActivatedRoute', [], { data: dataSpy }),
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
