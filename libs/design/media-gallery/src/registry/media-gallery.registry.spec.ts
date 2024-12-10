import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffSelectableDirective } from '@daffodil/design';

import {
  DaffMediaGallery,
  DaffMediaGalleryRegistry,
} from './media-gallery.registry';
import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

@Component({})
export class FakeComponent {}

export class ChangeDetectorRefMock implements Partial<ChangeDetectorRef> {
  markForCheck() {}
}

describe('@daffodil/design/media-gallery | DaffMediaGalleryRegistry', () => {
  let registry: DaffMediaGalleryRegistry;
  let cd: ChangeDetectorRef;
  const mockGalleryAlreadyAdded: DaffMediaGalleryRegistration = {
    name: 'galleryAlreadyAdded',
  };
  let mockThumbnailAlreadyAdded: DaffThumbnailDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMediaGalleryRegistry,
        {
          provide: ChangeDetectorRef,
          useClass: ChangeDetectorRefMock,
        },
      ],
    });
    registry = TestBed.inject(DaffMediaGalleryRegistry);
    cd = TestBed.inject(ChangeDetectorRef);
    mockThumbnailAlreadyAdded = new DaffThumbnailDirective(FakeComponent, registry, mockGalleryAlreadyAdded, new DaffSelectableDirective(cd));

    registry.galleries = {
      [mockGalleryAlreadyAdded.name]: new BehaviorSubject({
        gallery: mockGalleryAlreadyAdded,
        thumbnails: [mockThumbnailAlreadyAdded],
      }),
    };
  }));

  it('should be created', () => {
    expect(registry).toBeTruthy();
  });

  describe('add', () => {

    describe('when the gallery given already exists in the registry', () => {

      it('should add the thumbnail to the gallery given', () => {
        const newThumbnail: any = new DaffThumbnailDirective(FakeComponent, registry, mockGalleryAlreadyAdded, new DaffSelectableDirective(cd));
        registry.add(mockGalleryAlreadyAdded, newThumbnail);

        expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.findIndex((t) =>
          (<DaffThumbnailDirective><unknown>t) === newThumbnail)).toBeGreaterThan(-1);
      });

      it('should not add the thumbnail when the thumbnail already exists in the registry', () => {
        expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
        registry.add(mockGalleryAlreadyAdded, mockThumbnailAlreadyAdded);

        expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
      });
    });

    describe('when the gallery given does not exist in the registry', () => {

      const newGallery: DaffMediaGalleryRegistration = {
        name: 'newGallery',
      };

      let newThumbnail: DaffThumbnailDirective;
      let addedGallery: DaffMediaGallery;

      beforeEach(() => {
        newThumbnail = new DaffThumbnailDirective(FakeComponent, registry, newGallery, new DaffSelectableDirective(cd));

        spyOn(newThumbnail, 'select').and.callThrough();

        registry.add(newGallery, newThumbnail);

        addedGallery = registry.galleries[newGallery.name].getValue();
      });

      it('should add the gallery to the registry', () => {
        expect(addedGallery.gallery).toEqual(newGallery);
      });

      it('should add the thumbnail to the gallery given', () => {
        expect(addedGallery.thumbnails.findIndex(t => t === newThumbnail)).toBeGreaterThan(-1);
      });

      it('should select the thumbnail', () => {
        expect(newThumbnail.select).toHaveBeenCalledWith();
      });
    });
  });

  describe('remove', () => {
    it('should not do anything if the gallery associated with the given thumbnail DNE', () => {
      const newGallery: DaffMediaGalleryRegistration = {
        name: 'newGallery',
      };
      const newThumbnail = new DaffThumbnailDirective(FakeComponent, registry, newGallery, new DaffSelectableDirective(cd));
      registry.remove(newThumbnail);

      expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
    });

    it('should not do anything if the thumbnail does not exist in the registry', () => {
      const newThumbnail = new DaffThumbnailDirective(FakeComponent, registry, mockGalleryAlreadyAdded, new DaffSelectableDirective(cd));
      registry.remove(newThumbnail);

      expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
    });

    it('should remove the thumbnail from the registry', () => {
      registry.remove(mockThumbnailAlreadyAdded);

      expect(registry.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(0);
    });

    it('should remove the gallery from the registry', () => {
      registry.remove(mockGalleryAlreadyAdded);

      expect(registry.galleries[mockGalleryAlreadyAdded.name]).toBeUndefined();
    });
  });

  describe('select', () => {

    it('should not do anything if the gallery associated with the given thumbnail DNE', () => {
      const newThumbnail = new DaffThumbnailDirective(FakeComponent, registry, mockGalleryAlreadyAdded, new DaffSelectableDirective(cd));
      spyOn(newThumbnail, 'select').and.callThrough();
      registry.select(newThumbnail);

      expect(newThumbnail.select).not.toHaveBeenCalled();
    });

    it('should not do anything if the thumbnail is already selected', () => {
      mockThumbnailAlreadyAdded.select();
      registry.select(mockThumbnailAlreadyAdded);

      expect(mockThumbnailAlreadyAdded.selected).toEqual(true);
    });

    it('should not do anything if the thumbnail does not exist in the registry', () => {
      const newThumbnail = new DaffThumbnailDirective(FakeComponent, registry, mockGalleryAlreadyAdded, new DaffSelectableDirective(cd));
      spyOn(newThumbnail, 'select').and.callThrough();
      registry.select(newThumbnail);

      expect(newThumbnail.select).not.toHaveBeenCalled();
    });

    it('should select the thumbnail', () => {
      spyOn(mockThumbnailAlreadyAdded, 'select').and.callThrough();

      registry.select(mockThumbnailAlreadyAdded);

      expect(mockThumbnailAlreadyAdded.select).toHaveBeenCalledWith();
    });
  });
});
