import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandListComponent } from './list.component';

describe('DesignLandListComponent', () => {
  let component: DesignLandListComponent;
  let fixture: ComponentFixture<DesignLandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
