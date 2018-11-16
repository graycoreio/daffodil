import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderContainer } from './header.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromSidebar from '../../sidebar/reducers/index';

import { DaffioLogoModule } from '../../logo/logo.module';
import { DaffioHeaderComponent } from '../component/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';

describe('DaffioHeaderContainer', () => {
  let component: DaffioHeaderContainer;
  let fixture: ComponentFixture<DaffioHeaderContainer>;

  let store: Store<fromSidebar.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioLogoModule,
        StoreModule.forRoot({})
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
      let sidebarButton = fixture.debugElement.query(By.css('[sidebar-button]')).nativeElement;
      sidebarButton.click();
      
      expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
    });
  });

  it('renders a [daffio-header-item] for every links defined', () => {
    let headerItems = fixture.debugElement.queryAll(By.css('[daffio-header-item]'));

    expect(headerItems.length).toEqual(component.links.length);
  });
});
