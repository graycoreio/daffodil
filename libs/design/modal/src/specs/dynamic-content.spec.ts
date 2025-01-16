import {
  ComponentPortal,
  PortalModule,
} from '@angular/cdk/portal';
import {
  Component,
  DebugElement,
  NgModule,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalService } from '../service/modal.service';

@Component({
  template: `<p>It works!</p>`,
  standalone: true,
})
class DynamicComponent {}

@Component({
  template: `<daff-modal></daff-modal>`,
  imports: [
    DaffModalComponent,
    PortalModule,
    DynamicComponent,
  ],
  providers: [
    DaffModalService,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    modalDe = fixture.debugElement.query(By.css('daff-modal'));
    modal = modalDe.componentInstance;
    fixture.detectChanges();
  });

  it('should allow a user to attach dynamic content into the body of the modal', () => {
    modal.attachContent(new ComponentPortal(DynamicComponent));
    fixture.detectChanges();
    expect((<HTMLElement>modalDe.nativeElement).innerHTML).toContain('<p>It works!</p>');
  });
});
