import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffioMarketingHeaderContainer } from './marketing-header.component';
import { ToggleSidebar } from '../../../../core/sidebar/actions/sidebar.actions';
import * as fromSidebar from '../../../../core/sidebar/reducers/index';

@Component({ template: '<daffio-marketing-header-container></daffio-marketing-header-container>' })
class WrapperComponent {}

describe('DaffioMarketingHeaderContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let daffioMarketingHeaderContainer: DaffioMarketingHeaderContainer;

  let store: Store<fromSidebar.State>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        FontAwesomeModule,
      ],
      declarations: [
        WrapperComponent,
        DaffioMarketingHeaderContainer,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    daffioMarketingHeaderContainer = fixture.debugElement.query(By.css('daffio-marketing-header-container')).componentInstance;
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
});
