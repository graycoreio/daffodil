import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarModule, DaffSidebarViewportComponent } from '@daffodil/design';

import { SidebarViewportContainer } from './sidebar-viewport.component';
import * as fromDemoSidebar from '../../reducers';
import { ToggleSidebar, OpenSidebar, CloseSidebar, SetSidebarState } from '../../actions/sidebar.actions';

@Component({selector: 'demo-sidebar', template: ''})
class MockSidebarContainer {}

describe('SidebarViewportContainer', () => {
  let component: SidebarViewportContainer;
  let fixture: ComponentFixture<SidebarViewportContainer>;
  
  let sidebarViewport: DaffSidebarViewportComponent;

  let store: MockStore<fromDemoSidebar.State>;
  let stubShowSidebar: boolean;
  let sidebarContainer: MockSidebarContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffSidebarModule
      ],
      declarations: [ 
        SidebarViewportContainer,
        MockSidebarContainer
      ],
      providers: [
        provideMockStore({}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(fromDemoSidebar.selectShowSidebar, false);
    fixture.detectChanges();

    sidebarViewport = fixture.debugElement.query(By.css("daff-sidebar-viewport")).componentInstance;
    sidebarContainer = fixture.debugElement.query(By.css("demo-sidebar")).componentInstance;
  });

  afterAll(() => {
    store.resetSelectors();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar-viewport` mode to over', () => {
    expect(sidebarViewport.mode).toEqual("over");
  });

  it('should call close when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    spyOn(component, 'close');

    sidebarViewport.backdropClicked.emit()

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
        expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        spyOn(store, 'dispatch');
        component.open();
        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        spyOn(store, 'dispatch');
        component.close();
        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        spyOn(store, 'dispatch');
        component.setVisibility(true);
        expect(store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
