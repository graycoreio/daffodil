import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListTitleComponent } from './list-title.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<li daff-list-title class="host-element"></li>'})
class TestDaffListTitleComponent {}

describe('DaffListTitleComponent', () => {
  let component: TestDaffListTitleComponent;
  let fixture: ComponentFixture<TestDaffListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffListTitleComponent,
        DaffListTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "daff-list__title" on host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;

    expect(hostElement.classList.contains('daff-list__title')).toBeTruthy();
  });
});
