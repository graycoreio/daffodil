
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
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DaffioDocsPackageCardsContainer } from './package-cards.component';
import { DaffioRoute } from '../../../../core/router/route.type';

describe('DaffioDocsPackageCardsContainer', () => {
  let component: DaffioDocsPackageCardsContainer;
  let fixture: ComponentFixture<DaffioDocsPackageCardsContainer>;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;

  beforeEach(waitForAsync(() => {
    dataSpy = new BehaviorSubject({});

    TestBed.configureTestingModule({
      imports: [
        DaffioDocsPackageCardsContainer,
      ],
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
