import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContainer } from './header.component';

describe('HeaderContainer', () => {
  let component: HeaderContainer;
  let fixture: ComponentFixture<HeaderContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
