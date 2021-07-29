import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DesignLandMediaGalleryComponent } from './media-gallery.component';

describe('DesignLandMediaGalleryComponent', () => {
  let component: DesignLandMediaGalleryComponent;
  let fixture: ComponentFixture<DesignLandMediaGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandMediaGalleryComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandMediaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
