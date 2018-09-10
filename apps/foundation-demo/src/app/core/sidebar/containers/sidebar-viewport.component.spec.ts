import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { SidebarViewportContainer } from './sidebar-viewport.component';
import * as fromSidebar from '../reducers/index';
import { ToggleSidebar, OpenSidebar, CloseSidebar, SetSidebarState } from '../actions/sidebar.actions';
import { DaffSidebarModule } from '../../../design/molecules/sidebar/sidebar.module';
import { DaffSidebarComponent } from '../../../design/molecules/sidebar/sidebar/sidebar.component';
import { DaffSidebarViewportComponent } from '../../../design/molecules/sidebar/sidebar-viewport/sidebar-viewport.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SidebarContainer', () => {
  let component: SidebarViewportContainer;
  let fixture: ComponentFixture<SidebarViewportContainer>;
  
  let sidebar: DaffSidebarComponent;
  let sidebarViewport: DaffSidebarViewportComponent;

  let store: Store<fromSidebar.State>;
  let stubShowSidebar: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationSidebar: combineReducers(fromSidebar.reducers),
        }),
        NoopAnimationsModule,
        DaffSidebarModule,
      ],
      declarations: [ 
        SidebarViewportContainer,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');

    fixture.detectChanges();

    sidebar = fixture.debugElement.query(By.css("daff-sidebar")).componentInstance;
    sidebarViewport = fixture.debugElement.query(By.css("daff-sidebar-viewport")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar-viewport` mode to push', () => {
    expect(sidebarViewport.mode).toEqual("push");
  });

  it('should call close when the `daff-sidebar-viewport` emits `onBackdropClicked`', () => {
    spyOn(component, 'close');

    sidebarViewport.onBackdropClicked.emit()

    expect(component.close).toHaveBeenCalledWith();    
  })

  it('should call `close` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(component, 'close');

    sidebar.escapePressed.emit()

    expect(component.close).toHaveBeenCalledWith();    
  })

  describe('ngOnInit', () => {
    it('should initialize showSidebar$', () => {
      stubShowSidebar = false;
      spyOn(fromSidebar, 'selectShowSidebar').and.returnValue(stubShowSidebar);

      component.ngOnInit();

      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('methods', () => {
    describe('toggle', () => {
      it('should call store.dispatch with a ToggleSidebar action', () => {
        component.toggle();
  
        expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        component.open();
  
        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        component.close();
  
        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
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
