import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLandExampleViewer } from './example-viewer.component';

describe('DesignLandExampleViewer', () => {
  let component: DesignLandExampleViewer;
  let fixture: ComponentFixture<DesignLandExampleViewer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandExampleViewer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandExampleViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
