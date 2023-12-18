import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffSidebarFooterComponent } from './sidebar-footer.component';

@Component({ template: `
  <daff-sidebar-footer>Footer</daff-sidebar-footer>
` })
class WrapperComponent {}

describe('DaffSidebarFooterComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let sidebarFooter: DaffSidebarFooterComponent;
  let sidebarFooterDe: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffSidebarFooterComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    sidebarFooterDe = fixture.debugElement.query(By.css('daff-sidebar-footer'));
    sidebarFooter = sidebarFooterDe.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
});
