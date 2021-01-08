import { Component, Input, Output, EventEmitter, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from './modal.component';
import { DaffBackdropComponent, DaffBackdropModule } from '../../backdrop/public_api';

@Component({template: `
  <div class="daff-modal-wrapper">
    <daff-modal></daff-modal>
  </div>
`})
class WrapperComponent {}

describe('DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule
      ],
      declarations: [
        WrapperComponent,
        DaffModalComponent
      ]
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
});
