import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffMediaGalleryComponent } from './media-gallery.component';

describe('DaffMediaGalleryComponent', () => {
	let component: DaffMediaGalleryComponent;
	let fixture: ComponentFixture<DaffMediaGalleryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DaffMediaGalleryComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DaffMediaGalleryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
