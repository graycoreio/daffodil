import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffHeaderComponent } from './daff-header.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div class="host-element" daff-header></div>'})
class TestDaffodilHeaderComponent {}

describe('DaffHeaderComponent', () => {
  let component: TestDaffodilHeaderComponent;
  let fixture: ComponentFixture<TestDaffodilHeaderComponent>;
  let hostElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffodilHeaderComponent,
        DaffHeaderComponent
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

  it('should add a daff-header class to the host component', () => {
    expect(hostElement.nativeElement.classList.contains('daff-header')).toBeTruthy();
  });
});
