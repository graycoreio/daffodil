import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLoadingIconComponent } from './loading-icon.component';
import { Component } from '@angular/core';

@Component({ template: '<daff-loading-icon class="host-element"></daff-loading-icon>' })
class TestDaffLoadingIconComponent {}

describe('DaffLoadingIconComponent', () => {
  let component: TestDaffLoadingIconComponent;
  let fixture: ComponentFixture<TestDaffLoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffLoadingIconComponent,
        DaffLoadingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
