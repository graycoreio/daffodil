import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { DaffioGuidesNavTreeModule } from 'apps/daffio/src/app/guides/components/guides-nav-tree/guides-nav-tree.module';
import { cold } from 'jasmine-marbles';

import {
  DaffSidebarModule,
  DaffSidebarViewportComponent,
  DaffSidebarComponent,
} from '@daffodil/design';

import {
  OpenSidebar,
  CloseSidebar,
  SetSidebarState,
} from '../../actions/sidebar.actions';
import * as fromSidebar from '../../reducers/index';
import { DaffioSidebarViewportContainer } from './sidebar-viewport.component';

describe('DaffioSidebarViewportContainer', () => {
  let component: DaffioSidebarViewportContainer;
  let fixture: ComponentFixture<DaffioSidebarViewportContainer>;

  let daffSidebarViewport: DaffSidebarViewportComponent;
  let daffSidebar: DaffSidebarComponent;

  let store: Store<fromSidebar.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          daffioSidebar: combineReducers(fromSidebar.reducers),
        }),
        RouterTestingModule,
        NoopAnimationsModule,
        DaffSidebarModule,
        DaffioGuidesNavTreeModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DaffioSidebarViewportContainer,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioSidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
    daffSidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar-viewport` mode to the default initialState (push)', () => {
    expect(daffSidebarViewport.mode).toEqual('push');
  });

  describe('when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    it('should call close', () => {
      spyOn(component, 'close');

      daffSidebarViewport.backdropClicked.emit();

      expect(component.close).toHaveBeenCalledWith();
    });
  });

  describe('ngOnInit', () => {
    it('should initialize showSidebar$ to a false observable', () => {
      component.ngOnInit();

      const expected = cold('(a)', { a: false });
      expect(component.showSidebar$).toBeObservable(expected);
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

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        component.open();

        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        component.setVisibility(true);

        expect(store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
