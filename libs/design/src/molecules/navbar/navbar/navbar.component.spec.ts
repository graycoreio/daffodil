import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNavbarComponent } from './navbar.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<daff-navbar class="host-element"></ daff-navbar>'})
class TestDaffodilHeaderComponent {}

describe('DaffNavbarComponent', () => {
  let component: TestDaffodilHeaderComponent;
  let fixture: ComponentFixture<TestDaffodilHeaderComponent>;
  let hostElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffodilHeaderComponent,
        DaffNavbarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffodilHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    hostElement = fixture.debugElement.query(By.css('.host-element'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a daff-navbar class to the host component', () => {
    expect(hostElement.nativeElement.classList.contains('daff-navbar')).toBeTruthy();
  });
});
