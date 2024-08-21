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
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffioNavHeaderContainer } from './header.component';
import { ToggleSidebar } from 'apps/demo/src/app/core/sidebar/actions/sidebar.actions';

@Component({
  template: '<daffio-nav-header-container></daffio-nav-header-container>',
  standalone: true,
  imports: [
    DaffioNavHeaderContainer,
  ],
})
class WrapperComponent {}

describe('DaffioNavHeaderContainer', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let daffioHeaderContainer: DaffioNavHeaderContainer;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        WrapperComponent,
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
    fixture.detectChanges();

    daffioHeaderContainer = fixture.debugElement.query(By.css('daffio-nav-header-container')).componentInstance;
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
