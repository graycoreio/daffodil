import {
  ChangeDetectorRef,
  Directive,
} from '@angular/core';
import {
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaGalleryRegistry } from './media-gallery.registry';

@Directive({
  selector: '[daffMockThumbnail]',
})
export class DaffMockThumbnailDirective {

  constructor(
		public gallery: DaffMediaGalleryComponent,
  ) {}

	select = jasmine.createSpy();
	selected: boolean;
}

describe('DaffMediaGalleryRegistry', () => {
  let service: DaffMediaGalleryRegistry;
  let mockGalleryAlreadyAdded;
  let mockThumbnailAlreadyAdded;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMediaGalleryRegistry,
        ChangeDetectorRef,
      ],
    });
    service = TestBed.inject(DaffMediaGalleryRegistry);

    mockGalleryAlreadyAdded = new DaffMediaGalleryComponent();
    mockThumbnailAlreadyAdded = new DaffMockThumbnailDirective(mockGalleryAlreadyAdded);
    service.galleries = {
      [mockGalleryAlreadyAdded.name]: new BehaviorSubject({
        gallery: mockGalleryAlreadyAdded,
        thumbnails: [mockThumbnailAlreadyAdded],
      }),
    };
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {

    describe('when the gallery given already exists in the registry', () => {

      it('should add the thumbnail to the gallery given', () => {
        const newThumbnail: any = new DaffMockThumbnailDirective(mockGalleryAlreadyAdded);
        service.add(mockGalleryAlreadyAdded, newThumbnail);

        expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.findIndex((t) => (<DaffMockThumbnailDirective><unknown>t) === newThumbnail)).toBeGreaterThan(-1);
      });

      it('should not add the thumbnail when the thumbnail already exists in the registry', () => {
        expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
        service.add(mockGalleryAlreadyAdded, mockThumbnailAlreadyAdded);

        expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
      });
    });

    describe('when the gallery given does not exist in the registry', () => {

      let newGallery;
      let newThumbnail;
      let addedGallery;

      beforeEach(() => {
        newGallery = new DaffMediaGalleryComponent();
        newThumbnail = new DaffMockThumbnailDirective(newGallery);

        service.add(newGallery, newThumbnail);

        addedGallery = service.galleries[newGallery.name].getValue();
      });

      it('should add the gallery to the registry', () => {
        expect(addedGallery.gallery).toEqual(newGallery);
      });

      it('should add the thumbnail to the gallery given', () => {
        expect(addedGallery.thumbnails.findIndex(t => t === newThumbnail)).toBeGreaterThan(-1);
      });

      it('should select the thumbnail', () => {
        expect(newThumbnail.select).toHaveBeenCalled();
      });
    });
  });

  describe('remove', () => {

    it('should not do anything if the gallery associated with the given thumbnail DNE', () => {
      const newGallery = new DaffMediaGalleryComponent();
      const newThumbnail: any = new DaffMockThumbnailDirective(newGallery);
      service.remove(newThumbnail);

      expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
    });

    it('should not do anything if the thumbnail does not exist in the registry', () => {
      const newThumbnail: any = new DaffMockThumbnailDirective(mockGalleryAlreadyAdded);
      service.remove(newThumbnail);

      expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
    });

    it('should remove the thumbnail from the registry', () => {
      service.remove(mockThumbnailAlreadyAdded);

      expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(0);
    });
  });

  describe('select', () => {

    it('should not do anything if the gallery associated with the given thumbnail DNE', () => {
      const newGallery = new DaffMediaGalleryComponent();
      const newThumbnail: any = new DaffMockThumbnailDirective(newGallery);
      service.select(newThumbnail);

      expect(newThumbnail.select).not.toHaveBeenCalled();
    });

    it('should not do anything if the thumbnail is already selected', () => {
      mockThumbnailAlreadyAdded.selected = true;
      service.select(mockThumbnailAlreadyAdded);

      expect(mockThumbnailAlreadyAdded.selected).toEqual(true);
    });

    it('should not do anything if the thumbnail does not exist in the registry', () => {
      const newThumbnail: any = new DaffMockThumbnailDirective(mockGalleryAlreadyAdded);
      service.select(newThumbnail);

      expect(newThumbnail.select).not.toHaveBeenCalled();
    });

    it('should select the thumbnail', () => {
      mockThumbnailAlreadyAdded.selected = false;
      service.select(mockThumbnailAlreadyAdded);

      expect(mockThumbnailAlreadyAdded.select).toHaveBeenCalled();
    });
  });
});
