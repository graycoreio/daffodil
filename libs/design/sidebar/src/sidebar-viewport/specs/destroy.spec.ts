import { A11yModule } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './../sidebar-viewport.component';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  template: `
    <daff-sidebar-viewport>
      <daff-sidebar side="left" mode="over" [open]="true"></daff-sidebar>
    </daff-sidebar-viewport>
    `,
  imports: [
    DaffSidebarViewportComponent,
    DaffSidebarComponent,
  ],
})

class WrapperOneComponent {}

describe('@daffodil/design/sidebar | DaffSidebarViewportComponent | On Destroy', () => {
  let fixture: ComponentFixture<WrapperOneComponent>;
  let component: WrapperOneComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        A11yModule,
        WrapperOneComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperOneComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have `overflow: hidden` on the body when destroyed', () => {
    fixture.destroy();

    expect((TestBed.inject(DOCUMENT)).body.style.overflow).not.toEqual('hidden');
  });
});
