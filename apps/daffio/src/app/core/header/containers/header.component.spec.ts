import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderContainerComponent } from './header.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromSidebar from '../../sidebar/reducers/index';

import { DaffioLogoModule } from '../../logo/logo.module';
import { DaffioHeaderComponent } from '../component/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('DaffioHeaderContainerComponent', () => {
  let component: DaffioHeaderContainerComponent;
  let fixture: ComponentFixture<DaffioHeaderContainerComponent>;

  let store: Store<fromSidebar.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioLogoModule,
        StoreModule.forRoot({}),
        RouterTestingModule
      ],
      declarations: [
        DaffioHeaderContainerComponent,
        DaffioHeaderComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHeaderContainerComponent);
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

  it('renders a [daffio-header-item] for every links defined', () => {
    const headerItems = fixture.debugElement.queryAll(By.css('[daffio-header-item]'));

    expect(headerItems.length).toEqual(component.links.length);
  });
});
