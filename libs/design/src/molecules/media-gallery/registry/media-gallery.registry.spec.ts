import { ChangeDetectorRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

import { DaffMediaGalleryRegistry } from './media-gallery.registry';

describe('DaffMediaGalleryRegistry', () => {
	let service: DaffMediaGalleryRegistry;
	let mockGalleryAlreadyAdded;
	let mockThumbnailAlreadyAdded;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				DaffMediaGalleryRegistry,
				ChangeDetectorRef
			]
		});
		service = TestBed.get(DaffMediaGalleryRegistry);

		mockGalleryAlreadyAdded = new DaffMediaGalleryComponent();
		mockThumbnailAlreadyAdded = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGalleryAlreadyAdded);
		service.add(mockGalleryAlreadyAdded, mockThumbnailAlreadyAdded);
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('add', () => {
		
		describe('when the gallery given already exists in the registry', () => {
			
			it('should add the thumbnail to the gallery given', () => {
				const newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGalleryAlreadyAdded);
				service.add(mockGalleryAlreadyAdded, newThumbnail);

				expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.findIndex(t => t === newThumbnail)).toBeGreaterThan(-1);
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
				newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, newGallery);

				service.add(newGallery, newThumbnail);

				addedGallery = service.galleries[newGallery.name].getValue();
			});
			
			it('should add the gallery to the registry', () => {
				expect(addedGallery.gallery).toEqual(newGallery);
			});

			it('should add the thumbnail to the gallery given', () => {
				expect(addedGallery.thumbnails.findIndex(t => t === newThumbnail)).toBeGreaterThan(-1)
			});

			it('should select the thumbnail', () => {
				expect(addedGallery.thumbnails.find(t => t === newThumbnail).selected).toEqual(true);
			});
		});
	});

	describe('remove', () => {
		
		it('should not do anything if the gallery associated with the given thumbnail DNE', () => {
			const newGallery = new DaffMediaGalleryComponent();
			const newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, newGallery);
			service.remove(newThumbnail);

			expect(service.galleries[mockGalleryAlreadyAdded.name].getValue().thumbnails.length).toEqual(1);
		});

		it('should not do anything if the thumbnail does not exist in the registry', () => {
			const newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGalleryAlreadyAdded);
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
			const newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, newGallery);
			service.select(newThumbnail);

			expect(newThumbnail.selected).toEqual(false);
		});

		it('should not do anything if the thumbnail is already selected', () => {
			mockThumbnailAlreadyAdded.selected = true;
			service.select(mockThumbnailAlreadyAdded);

			expect(mockThumbnailAlreadyAdded.selected).toEqual(true);
		});

		it('should not do anything if the thumbnail does not exist in the registry', () => {
			const newThumbnail = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGalleryAlreadyAdded);
			service.select(newThumbnail);

			expect(newThumbnail.selected).toEqual(false);
		});

		it('should select the thumbnail', () => {
			mockThumbnailAlreadyAdded.selected = false;
			service.select(mockThumbnailAlreadyAdded);

			expect(mockThumbnailAlreadyAdded.selected).toEqual(true);
		});
	});
});
