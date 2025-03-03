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

import { DaffioDocsTocSidebarContentContainer } from './toc-sidebar-content.component';
import { DaffioActiveHeaderService } from '../../../core/dynamic-fragment/service';
import { DaffioRoute } from '../../../core/router/route.type';

describe('DaffioDocsTocSidebarContentContainer', () => {
  let component: DaffioDocsTocSidebarContentContainer;
  let fixture: ComponentFixture<DaffioDocsTocSidebarContentContainer>;
  let dataSpy: BehaviorSubject<DaffioRoute['data']>;

  beforeEach(waitForAsync(() => {
    dataSpy = new BehaviorSubject({});

    TestBed.configureTestingModule({
      imports: [
        DaffioDocsTocSidebarContentContainer,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        DaffioActiveHeaderService,
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
    fixture = TestBed.createComponent(DaffioDocsTocSidebarContentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
