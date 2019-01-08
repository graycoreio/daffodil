import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPortalComponent } from './modal-portal.component';
import { Component } from '@angular/core';

@Component({ template: `
  <demo-modal-portal>
    <div class="portal-content"></div>
  </demo-modal-portal>

  <div class="portal-host-destination">
    <div id="demo-modal-portal">
      // portal content should go here.
    </div>
  <div>
`})
class WrapperComponent {}

describe('ModalPortalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        ModalPortalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should attach portal-content to portal-host-destination', () => {
    const modalPortal = document.getElementById('demo-modal-portal');

    expect(modalPortal.innerHTML.match('portal-content')).toBeTruthy();
  });
});
