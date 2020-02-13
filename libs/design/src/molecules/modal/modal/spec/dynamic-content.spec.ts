import { Component, Input, Output, EventEmitter, DebugElement, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../modal.component';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';

@Component({template: `<daff-modal></daff-modal>`})
class WrapperComponent {}

@Component({template: `<p>It works!</p>`})
class DynamicComponent {}

@NgModule({
  declarations: [DynamicComponent],
  entryComponents: [DynamicComponent]
})
class DynamicModule{}

describe('DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        PortalModule,
        DynamicModule
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

  it('should allow a user to attach dynamic content into the body of the modal', () => {
    modal.attachContent(new ComponentPortal(DynamicComponent));
    fixture.detectChanges();
    expect((modalDe.nativeElement as HTMLElement).innerHTML).toContain('<p>It works!</p>');
  });
});