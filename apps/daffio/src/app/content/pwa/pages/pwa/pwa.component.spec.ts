import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { DaffioPwaComponent } from './pwa.component';

describe('DaffioPwaComponent', () => {
  let component: DaffioPwaComponent;
  let fixture: ComponentFixture<DaffioPwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DaffioPwaComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
