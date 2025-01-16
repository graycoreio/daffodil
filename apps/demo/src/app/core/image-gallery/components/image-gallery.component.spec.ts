import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  provideMockStore,
  MockStore,
} from '@ngrx/store/testing';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

import { ImageGalleryComponent } from './image-gallery.component';

const stubImages = [
  { url: '/assets/mh01-black_main.jpg', label: 'testlabel' },
  { url: '/assets/mh01-gray_alt1.jpg', label: 'testlabel1' },
];

@Component({
  template: '<demo-image-gallery-container [images]="imagesValue"></demo-image-gallery-container>',
  standalone: false,
})
class WrapperComponent {
  imagesValue: Record<string, any>[] = stubImages;
}

describe('ImageGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let imageGalleryContainer: ImageGalleryComponent;
  let daffGalleryImages;
  let store: MockStore<any>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffMediaGalleryModule,
        DaffImageModule,
      ],
      declarations: [
        WrapperComponent,
        ImageGalleryComponent,
      ],
      providers: [
        provideMockStore({}),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();

    imageGalleryContainer = fixture.debugElement.query(By.css('demo-image-gallery-container')).componentInstance;
    daffGalleryImages = fixture.debugElement.queryAll(By.css('daff-media-gallery'));
  });

  afterAll(() => store.resetSelectors());

  it('should create', () => {
    expect(imageGalleryContainer).toBeTruthy();
  });

  it('should be able to take images as input', () => {
    expect(imageGalleryContainer.images).toEqual(stubImages);
  });
});
