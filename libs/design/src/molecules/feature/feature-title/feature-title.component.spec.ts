import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureTitleComponent } from './feature-title.component';

describe('DaffFeatureTitleComponent', () => {
  let component: DaffFeatureTitleComponent;
  let fixture: ComponentFixture<DaffFeatureTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFeatureTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffFeatureTitleComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-feature__title` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-feature__title')).toBeTruthy();
  });
});
