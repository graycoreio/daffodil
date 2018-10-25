import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListItemComponent } from './list-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<li daff-list-item class="host-element"></li>'})
class TestDaffListItemComponent {}

describe('DaffListItemComponent', () => {
  let component: TestDaffListItemComponent;
  let fixture: ComponentFixture<TestDaffListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffListItemComponent,
        DaffListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "daff-list__item" on host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;

    expect(hostElement.classList.contains('daff-list__item')).toBeTruthy();
  });
});
