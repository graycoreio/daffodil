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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from './modal.component';
import { DaffModalService } from '../service/modal.service';

@Component({
  template: `
    <div class="custom-modal-component">
      <daff-modal></daff-modal>
    </div>
  `,
  imports: [
    DaffModalComponent,
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

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-modal" to the host element', () => {
    expect(modalDe.classes).toEqual(jasmine.objectContaining({
      'daff-modal': true,
    }));
  });

  it('should have a role of dialog on the host element', () => {
    expect(modal.role).toBe('dialog');
  });

  it('should set aria-modal to true on the host element', () => {
    expect(modalDe.attributes['aria-modal']).toEqual('true');
  });
});
