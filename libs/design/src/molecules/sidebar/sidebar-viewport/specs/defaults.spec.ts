import { A11yModule } from '@angular/cdk/a11y';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './../sidebar-viewport.component';
import { DaffBackdropModule } from '../../../backdrop/public_api';
import { DaffSidebarAnimationStates } from '../../animation/sidebar-animation';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

describe('DaffSidebarViewportComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffSidebarViewportComponent>;
  let component: DaffSidebarViewportComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule,
        A11yModule,
      ],
      declarations: [
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarViewportComponent);
    component = fixture.componentInstance;

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the _animationState should be `open` by default', () => {
    expect(component._animationState).toEqual({ value: DaffSidebarAnimationStates.CLOSED, params: { shift: '0px' }});
  });
});
