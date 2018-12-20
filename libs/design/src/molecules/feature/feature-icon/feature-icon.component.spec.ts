import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureIconComponent } from './feature-icon.component';

describe('DaffFeatureIconComponent', () => {
  let component: DaffFeatureIconComponent;
  let fixture: ComponentFixture<DaffFeatureIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFeatureIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffFeatureIconComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-feature__icon` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-feature__icon')).toBeTruthy();
  });
});
