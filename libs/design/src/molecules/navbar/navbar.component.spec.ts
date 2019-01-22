import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNavbarComponent } from './navbar.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<daff-navbar class="host-element"></ daff-navbar>'})
class WrapperComponent {}

describe('DaffNavbarComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let hostElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffNavbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    hostElement = fixture.debugElement.query(By.css('.host-element'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a daff-navbar class to the host component', () => {
    expect(hostElement.nativeElement.classList.contains('daff-navbar')).toBeTruthy();
  });
});
