import { TestBed } from '@angular/core/testing';

import { DaffMediaGalleryRegistry } from './media-gallery.registry';

describe('DaffMediaGalleryRegistry', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: DaffMediaGalleryRegistry = TestBed.get(
			DaffMediaGalleryRegistry,
		);
		expect(service).toBeTruthy();
	});
});
