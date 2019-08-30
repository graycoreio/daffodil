import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { DaffioNotFoundComponent } from './not-found.component';

describe('DaffioNotFoundComponent', () => {
  let component: DaffioNotFoundComponent;
  let fixture: ComponentFixture<DaffioNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DaffioNotFoundComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
