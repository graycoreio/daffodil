import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffImageGalleryModule } from '@daffodil/design';

import { ImageGalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffImageGalleryModule
      ],
      declarations: [ ImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
