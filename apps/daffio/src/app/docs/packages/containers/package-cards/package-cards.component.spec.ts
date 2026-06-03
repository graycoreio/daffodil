import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffRouterDataService } from '@daffodil/router';

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
          provide: DaffRouterDataService,
          useValue: jasmine.createSpyObj('DaffRouterDataService', [], { data$: dataSpy }),
        },
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
