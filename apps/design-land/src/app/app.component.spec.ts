import { TestBed, waitForAsync } from '@angular/core/testing';
import { DesignLandAppComponent } from './app.component';

describe('DesignLandAppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DesignLandAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
