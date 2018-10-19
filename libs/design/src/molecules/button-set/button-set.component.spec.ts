import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffButtonSetComponent } from './button-set.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-button-set></div>'})
class TestDaffButtonSetComponent {}

describe('DaffButtonSetComponent', () => {
  let component: TestDaffButtonSetComponent;
  let fixture: ComponentFixture<TestDaffButtonSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffButtonSetComponent,
        DaffButtonSetComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffButtonSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "daff-button-set" on host element', () => {
    let buttonSet = fixture.debugElement.query(By.css('[daff-button-set]')).nativeElement;

    expect(buttonSet.classList.contains('daff-button-set')).toBeTruthy();
  });
});
