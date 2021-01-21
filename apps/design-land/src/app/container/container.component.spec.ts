import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandContainerComponent } from './container.component';

describe('DesignLandContainerComponent', () => {
  let component: DesignLandContainerComponent;
  let fixture: ComponentFixture<DesignLandContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
