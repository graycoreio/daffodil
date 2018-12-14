import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListItemComponent } from './list-item.component';

describe('DaffListItemComponent', () => {
  let component: DaffListItemComponent;
  let fixture: ComponentFixture<DaffListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListItemComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-list-item` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-list-item')).toBeTruthy();
  });
});
