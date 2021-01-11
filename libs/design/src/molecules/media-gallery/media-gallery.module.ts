import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffMediaGalleryComponent } from './media-gallery.component';
import { DaffThumbnailDirective } from './thumbnail/thumbnail.directive';
import { DaffMediaRendererComponent } from './media-renderer/media-renderer.component';
import { DaffMediaGalleryRegistry } from './registry/media-gallery.registry';

@NgModule({
	declarations: [
		DaffMediaGalleryComponent,
		DaffThumbnailDirective,
		DaffMediaRendererComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		DaffThumbnailDirective,
		DaffMediaGalleryComponent
	],
	providers: [
		DaffMediaGalleryRegistry
	]
})
export class DaffMediaGalleryModule {}
