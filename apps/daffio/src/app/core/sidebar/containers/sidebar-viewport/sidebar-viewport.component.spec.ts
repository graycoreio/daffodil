import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import {
  DaffSidebarModule,
  DaffSidebarViewportComponent,
  DaffSidebarComponent,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';
import {
  DaffRouterNamedViewService,
  DaffRouterNamedViews,
} from '@daffodil/router';

import { DaffioSidebarViewportContainer } from './sidebar-viewport.component';
import { CloseSidebar } from 'apps/demo/src/app/core/sidebar/actions/sidebar.actions';
import { DaffioRouterNamedViewsEnum } from '../../../router/named-views/models/named-views.enum';

@Component({ template: '' })
class TestComponent {}

describe('DaffioSidebarViewportContainer', () => {
  let component: DaffioSidebarViewportContainer;
  let fixture: ComponentFixture<DaffioSidebarViewportContainer>;

  let daffSidebarViewport: DaffSidebarViewportComponent;
  let daffSidebar: DaffSidebarComponent;

  let store: MockStore;
  let namedViewServiceSpy: jasmine.SpyObj<DaffRouterNamedViewService>;
  let namedViews: BehaviorSubject<DaffRouterNamedViews>;

  beforeEach(waitForAsync(() => {
    namedViews = new BehaviorSubject({});
    namedViewServiceSpy = jasmine.createSpyObj('DaffRouterNamedViewService', {}, { namedViews$: namedViews });

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        DaffSidebarModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DaffioSidebarViewportContainer,
        TestComponent,
      ],
      providers: [
        {
          provide: DaffRouterNamedViewService,
          useValue: namedViewServiceSpy,
        },
        provideMockStore(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioSidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    store.overrideSelector(fromSidebar.selectShowSidebar, false);
    store.overrideSelector(fromSidebar.selectSidebarMode, DaffSidebarModeEnum.Side);
    store.setState({});

    fixture.detectChanges();
    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
    daffSidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    it('should call close', () => {
      spyOn(component, 'close');

      daffSidebarViewport.backdropClicked.emit();

      expect(component.close).toHaveBeenCalledWith();
    });
  });

  it('should call `close` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(component, 'close');

    daffSidebar.escapePressed.emit();

    expect(component.close).toHaveBeenCalled();
  });

  describe('methods', () => {
    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        component.close();

        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });
  });

  describe('when there is a named view for the sidebar header', () => {
    beforeEach(() => {
      namedViews.next({
        [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.css('daff-sidebar-header'));
      expect(sidebarHeader).toBeTruthy();
    });
  });

  describe('when there is not a named view for the sidebar header', () => {
    beforeEach(() => {
      namedViews.next({});
      fixture.detectChanges();
    });

    it('should not render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.css('daff-sidebar-header'));
      expect(sidebarHeader).toBeFalsy();
    });
  });

  describe('when there is a named view for the sidebar footer', () => {
    beforeEach(() => {
      namedViews.next({
        [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.css('daff-sidebar-footer'));
      expect(sidebarFooter).toBeTruthy();
    });
  });

  describe('when there is not a named view for the sidebar footer', () => {
    beforeEach(() => {
      namedViews.next({});
      fixture.detectChanges();
    });

    it('should not render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.css('daff-sidebar-footer'));
      expect(sidebarFooter).toBeFalsy();
    });
  });

  describe('when the sidebar mode is side-fixed', () => {
    beforeEach(() => {
      store.overrideSelector(fromSidebar.selectSidebarMode, DaffSidebarModeEnum.SideFixed);
      store.setState({});
      fixture.detectChanges();
    });

    it('should not render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.css('daff-sidebar-header'));
      expect(sidebarHeader).toBeFalsy();
    });

    it('should not render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.css('daff-sidebar-footer'));
      expect(sidebarFooter).toBeFalsy();
    });
  });

  describe('when the sidebar mode is not side-fixed and there are named views for the header and footer', () => {
    beforeEach(() => {
      store.overrideSelector(fromSidebar.selectSidebarMode, DaffSidebarModeEnum.Side);
      store.setState({});
      namedViews.next({
        [DaffioRouterNamedViewsEnum.SIDEBARHEADER]: TestComponent,
        [DaffioRouterNamedViewsEnum.SIDEBARFOOTER]: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.css('daff-sidebar-header'));
      expect(sidebarHeader).toBeTruthy();
    });

    it('should render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.css('daff-sidebar-footer'));
      expect(sidebarFooter).toBeTruthy();
    });
  });
});
