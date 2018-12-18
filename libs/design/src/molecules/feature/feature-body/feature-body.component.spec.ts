import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureBodyComponent } from './feature-body.component';

describe('DaffFeatureBodyComponent', () => {
  let component: DaffFeatureBodyComponent;
  let fixture: ComponentFixture<DaffFeatureBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFeatureBodyComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffFeatureBodyComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-feature__body` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-feature__body')).toBeTruthy();
  });
});
