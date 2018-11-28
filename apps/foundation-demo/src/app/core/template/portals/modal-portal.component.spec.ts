import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPortalComponent } from './modal-portal.component';
import { Component } from '@angular/core';

@Component({ template: `
  <modal-portal>
    <div class="portal-content"></div>
  </modal-portal>

  <div class="portal-host-destination">
    <div id="modal-portal">
      // portal content should go here.
    </div>
  <div>
`})
class TestModalPortalWrapper {}

describe('ModalPortalComponent', () => {
  let component: TestModalPortalWrapper;
  let fixture: ComponentFixture<TestModalPortalWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestModalPortalWrapper,
        ModalPortalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalPortalWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should attach portal-content to portal-host-destination', () => {
    let modalPortal = document.getElementById('modal-portal');

    expect(modalPortal.innerHTML.match('portal-content')).toBeTruthy();
  });
});
