import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandImageComponent } from './image.component';

describe('DesignLandImageComponent', () => {
  let component: DesignLandImageComponent;
  let fixture: ComponentFixture<DesignLandImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
