import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioNavigationItemComponent } from './navigation-item.component';

describe('DaffioNavigationItemComponent', () => {
  let component: DaffioNavigationItemComponent;
  let fixture: ComponentFixture<DaffioNavigationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffioNavigationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
