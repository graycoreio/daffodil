import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';

import {
  DaffSidebarModule,
  DaffSidebarSide,
  DaffSidebarViewportComponent,
  DaffSidebarMode,
} from '@daffodil/design/sidebar';

import { SidebarViewportContainer } from './sidebar-viewport.component';
import {
  ToggleSidebar,
  OpenSidebar,
  CloseSidebar,
  SetSidebarState,
} from '../../actions/sidebar.actions';
import * as fromDemoSidebar from '../../reducers';

@Component({
  selector: 'demo-sidebar', template: '',
  standalone: false,
})
class MockSidebarContainer {
  @Input() side: DaffSidebarSide;

  @Input() mode: DaffSidebarMode;

  @Input() open: boolean;

}

describe('SidebarViewportContainer', () => {
  let component: SidebarViewportContainer;
  let fixture: ComponentFixture<SidebarViewportContainer>;

  let sidebarViewport: DaffSidebarViewportComponent;

  let store: MockStore<fromDemoSidebar.State>;
  let stubShowSidebar: boolean;
  let sidebarContainer: MockSidebarContainer;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffSidebarModule,
      ],
      declarations: [
        SidebarViewportContainer,
        MockSidebarContainer,
      ],
      providers: [
        provideMockStore({}),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    store.overrideSelector(fromDemoSidebar.selectShowSidebar, false);
    fixture.detectChanges();

    sidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
    sidebarContainer = fixture.debugElement.query(By.css('demo-sidebar')).componentInstance;
  });

  afterAll(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar` mode to under', () => {
    expect(sidebarContainer.mode).toEqual('under');
  });

  it('should call close when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    spyOn(component, 'close');

    sidebarViewport.backdropClicked.emit();

    expect(component.close).toHaveBeenCalledWith();
  });

  describe('ngOnInit', () => {
    it('should initialize showSidebar$', () => {
      stubShowSidebar = false;

      component.ngOnInit();

      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('methods', () => {
    describe('toggle', () => {
      it('should call store.dispatch with a ToggleSidebar action', () => {
        spyOn(store, 'dispatch');
        component.toggle();
        expect(<any>store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        spyOn(store, 'dispatch');
        component.open();
        expect(<any>store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        spyOn(store, 'dispatch');
        component.close();
        expect(<any>store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        spyOn(store, 'dispatch');
        component.setVisibility(true);
        expect(<any>store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
