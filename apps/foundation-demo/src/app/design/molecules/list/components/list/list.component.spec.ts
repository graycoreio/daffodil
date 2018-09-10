import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListComponent } from './list.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<ul daff-list class="host-element"></ul>'})
class TestDaffListComponent {}

describe('DaffListComponent', () => {
  let component: TestDaffListComponent;
  let fixture: ComponentFixture<TestDaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffListComponent,
        DaffListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "daff-list" on host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;

    expect(hostElement.classList.contains('daff-list')).toBeTruthy();
  });
});
