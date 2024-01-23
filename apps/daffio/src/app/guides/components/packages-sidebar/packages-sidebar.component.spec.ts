import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LetModule } from '@ngrx/component';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffBreakpoints } from '@daffodil/design';

import {
  DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND,
  DaffioDocsPackagesSidebarComponent,
} from './packages-sidebar.component';
import { DaffioDocsSidebarContentComponentModule } from '../../../core/sidebar/components/docs-sidebar-content/docs-sidebar-content.module';
import { selectSidebarKind } from '../../../core/sidebar/reducers';
import { DaffioDocsPackagesListContainerModule } from '../../containers/packages-list/packages-list.module';

describe('DaffioDocsPackagesSidebarComponent', () => {
  let component: DaffioDocsPackagesSidebarComponent;
  let fixture: ComponentFixture<DaffioDocsPackagesSidebarComponent>;
  let store: MockStore;
  let breakpointSpy: jasmine.SpyObj<BreakpointObserver>;
  let breakpointState: BehaviorSubject<BreakpointState>;

  beforeEach(waitForAsync(() => {
    breakpointSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);

    TestBed.configureTestingModule({
      imports: [
        LetModule,
        RouterTestingModule,
        HttpClientTestingModule,
        DaffioDocsPackagesListContainerModule,
        DaffioDocsSidebarContentComponentModule,
      ],
      declarations: [
        DaffioDocsPackagesSidebarComponent,
      ],
      providers: [
        provideMockStore(),
        {
          provide: BreakpointObserver,
          useValue: breakpointSpy,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    breakpointState = new BehaviorSubject({ matches: false, breakpoints: {}});
    breakpointSpy.observe.withArgs(DaffBreakpoints.BIG_TABLET).and.returnValue(breakpointState);

    fixture = TestBed.createComponent(DaffioDocsPackagesSidebarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the breakpoint is big tablet', () => {
    beforeEach(() => {
      breakpointState.next({
        matches: true,
        breakpoints: {},
      });
      fixture.detectChanges();
    });

    describe('and when the sidebar kind is unset', () => {
      beforeEach(() => {
        store.overrideSelector(selectSidebarKind, undefined);
        store.setState({});
        fixture.detectChanges();
      });

      it('should render <daffio-docs-packages-list-container>', () => {
        expect(fixture.debugElement.query(By.css('daffio-docs-packages-list-container'))).toBeTruthy();
      });
    });

    describe('and when the sidebar kind is content', () => {
      beforeEach(() => {
        store.overrideSelector(selectSidebarKind, DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND);
        store.setState({});
        fixture.detectChanges();
      });

      it('should render <daffio-docs-packages-list-container>', () => {
        expect(fixture.debugElement.query(By.css('daffio-docs-packages-list-container'))).toBeTruthy();
      });
    });
  });

  describe('when the breakpoint is not big tablet', () => {
    beforeEach(() => {
      breakpointState.next({
        matches: false,
        breakpoints: {},
      });
      fixture.detectChanges();
    });

    describe('and when the sidebar kind is unset', () => {
      beforeEach(() => {
        store.overrideSelector(selectSidebarKind, undefined);
        store.setState({});
        fixture.detectChanges();
      });

      it('should render <daffio-docs-sidebar-content>', () => {
        expect(fixture.debugElement.query(By.css('daffio-docs-sidebar-content'))).toBeTruthy();
      });
    });

    describe('and when the sidebar kind is content', () => {
      beforeEach(() => {
        store.overrideSelector(selectSidebarKind, DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND);
        store.setState({});
        fixture.detectChanges();
      });

      it('should render <daffio-docs-packages-list-container>', () => {
        expect(fixture.debugElement.query(By.css('daffio-docs-packages-list-container'))).toBeTruthy();
      });
    });
  });
});
