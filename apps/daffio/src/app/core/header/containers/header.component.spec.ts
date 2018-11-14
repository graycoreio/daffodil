import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderContainer } from './header.component';
import { StoreModule } from '@ngrx/store';
import { DaffioLogoModule } from '../../logo/logo.module';
import { DaffioHeaderComponent } from '../component/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DaffioHeaderContainer', () => {
  let component: DaffioHeaderContainer;
  let fixture: ComponentFixture<DaffioHeaderContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioLogoModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        DaffioHeaderContainer,
        DaffioHeaderComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHeaderContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
