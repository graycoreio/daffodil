import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DaffioHeaderItemDirective } from './header-item.directive';

@Component({template: '<div daffioHeaderItem>Item</div>'})
class Wrapper {}

describe('DaffioHeaderItemComponent', () => {
  let component: Wrapper;
  let fixture: ComponentFixture<Wrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        Wrapper,
        DaffioHeaderItemDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
