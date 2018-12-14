import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListItemIconComponent } from './list-item-icon.component';

describe('DaffListItemIconComponent', () => {
  let component: DaffListItemIconComponent;
  let fixture: ComponentFixture<DaffListItemIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffListItemIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListItemIconComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-list-item__icon` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-list-item__icon')).toBeTruthy();
  });
});
