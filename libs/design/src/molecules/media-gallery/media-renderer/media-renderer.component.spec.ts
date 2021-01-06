import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffMediaRendererComponent } from './media-renderer.component';

describe('DaffMediaRendererComponent', () => {
	let component: DaffMediaRendererComponent;
	let fixture: ComponentFixture<DaffMediaRendererComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DaffMediaRendererComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DaffMediaRendererComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
