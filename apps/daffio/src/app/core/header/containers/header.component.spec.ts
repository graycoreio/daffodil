import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { StoreModule, Store } from '@ngrx/store';

import * as fromSidebar from '../../sidebar/reducers/index';
import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';

import { DaffioLogoModule } from '../../logo/logo.module';
import { DaffioHeaderComponent } from '../component/header.component';
import { DaffioHeaderContainer } from './header.component';



describe('DaffioHeaderContainer', () => {
  let component: DaffioHeaderContainer;
  let fixture: ComponentFixture<DaffioHeaderContainer>;

  let store: Store<fromSidebar.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioLogoModule,
        StoreModule.forRoot({}),
        RouterTestingModule
      ],
      declarations: [
        DaffioHeaderContainer,
        DaffioHeaderComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHeaderContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when [sidebar-button] is clicked', () => {
    it('should call store.dispatch with a ToggleSidebar action', () => {
      const sidebarButton = fixture.debugElement.query(By.css('[sidebar-button]')).nativeElement;
      sidebarButton.click();
      
      expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
    });
  });

  it('renders a [daffioHeaderItem] for every links defined', () => {
    let headerItems = fixture.debugElement.queryAll(By.css('[daffioHeaderItem]'));

    expect(headerItems.length).toEqual(component.links.length);
  });
});
