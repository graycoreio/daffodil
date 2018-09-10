import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContainer } from './header.component';
import { LogoModule } from '../../../logo/logo.module';
import { StoreModule } from '@ngrx/store';

describe('HeaderContainer', () => {
  let component: HeaderContainer;
  let fixture: ComponentFixture<HeaderContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        LogoModule
      ],
      declarations: [ HeaderContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
