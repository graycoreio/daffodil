import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureComponent } from './feature.component';

describe('DaffFeatureComponent', () => {
  let component: DaffFeatureComponent;
  let fixture: ComponentFixture<DaffFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFeatureComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffFeatureComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-feature` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daff-feature')).toBeTruthy();
  });
});
