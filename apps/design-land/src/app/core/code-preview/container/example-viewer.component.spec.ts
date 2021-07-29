import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandExampleViewerContainer } from './example-viewer.component';

describe('DesignLandExampleViewerContainer', () => {
  let component: DesignLandExampleViewerContainer;
  let fixture: ComponentFixture<DesignLandExampleViewerContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandExampleViewerContainer ],
      imports: [
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandExampleViewerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
