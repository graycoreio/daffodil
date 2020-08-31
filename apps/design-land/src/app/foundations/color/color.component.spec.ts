import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandColorComponent } from './color.component';

describe('DesignLandColorComponent', () => {
  let component: DesignLandColorComponent;
  let fixture: ComponentFixture<DesignLandColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandColorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
