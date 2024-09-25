import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffioDocsDesignLandingPageComponent } from './landing.component';

describe('DaffioDocsDesignLandingPageComponent', () => {
  let component: DaffioDocsDesignLandingPageComponent;
  let fixture: ComponentFixture<DaffioDocsDesignLandingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocsDesignLandingPageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsDesignLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
