import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderContainer } from './header.component';
import { LogoModule } from '../../logo/logo.module';
import { StoreModule } from '@ngrx/store';

describe('DaffioHeaderContainer', () => {
  let component: DaffioHeaderContainer;
  let fixture: ComponentFixture<DaffioHeaderContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        LogoModule
      ],
      declarations: [ DaffioHeaderContainer ]
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
