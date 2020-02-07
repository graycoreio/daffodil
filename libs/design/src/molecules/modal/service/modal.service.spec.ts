import {
	TestBed,
	async,
	ComponentFixture,
	flush,
	fakeAsync,
} from '@angular/core/testing';
import { DaffModalService } from './modal.service';
import {
	Component,
	NgModule,
	DebugElement,
	ViewContainerRef,
} from '@angular/core';
import { DaffModalModule } from '../modal.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
	template: `
		<p>It works!</p>
	`,
})
class DynamicComponent {}

@NgModule({
	declarations: [DynamicComponent],
	entryComponents: [DynamicComponent],
})
class DynamicModule {}

@Component({ template: '' })
class WrapperComponent {
	constructor(public viewContainerRef: ViewContainerRef) {}
}

describe('DaffModalService', () => {
	let service: DaffModalService;
	let overlayContainer: OverlayContainer;
	let overlayContainerElement: HTMLElement;
	let fixture: ComponentFixture<WrapperComponent>;
	let wrapper: WrapperComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [DynamicModule, DaffModalModule, NoopAnimationsModule],
			declarations: [WrapperComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		service = TestBed.get(DaffModalService);
		overlayContainer = TestBed.get<OverlayContainer>(OverlayContainer);
		overlayContainerElement = overlayContainer.getContainerElement();
		fixture = TestBed.createComponent(WrapperComponent);
		fixture.detectChanges();
		wrapper = fixture.componentInstance;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('opening a modal', () => {
		it('should be able to open a modal with a given component', () => {
			expect(overlayContainerElement.textContent).not.toContain('It works!');
			service.open(DynamicComponent);
			expect(overlayContainerElement.textContent).toContain('It works!');
		});

		it('should allow a user to override what happens when the backdrop is clicked', () => {
			let count = 0;
			service.open(DynamicComponent, {
				onBackdropClicked: () => {
					count++;
				},
			});
			const backdrop = overlayContainerElement.querySelector(
				'.cdk-overlay-backdrop',
			) as HTMLElement;
			backdrop.click();
			expect(count).toEqual(1);
			expect(overlayContainerElement.textContent).toContain('It works!');
		});
	});

	describe('the default configuration', () => {
		it('should configure the modal to close when the backdrop is clicked', fakeAsync(() => {
			service.open(DynamicComponent);
			expect(overlayContainerElement.textContent).toContain('It works!');
			const backdrop = overlayContainerElement.querySelector(
				'.cdk-overlay-backdrop',
			) as HTMLElement;

			backdrop.click();
			fixture.detectChanges();
			flush();

			expect(overlayContainerElement.textContent).not.toContain('It works!');
		}));
	});
});
