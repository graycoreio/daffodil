import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListSubheaderComponent } from './list-subheader.component';

describe('DaffListSubheaderComponent', () => {
  let component: DaffListSubheaderComponent;
  let fixture: ComponentFixture<DaffListSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffListSubheaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListSubheaderComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-list__subheader` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-list__subheader')).toBeTruthy();
  });
});
