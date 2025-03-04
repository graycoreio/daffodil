import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

import { DaffMediaGalleryComponent } from '../media-gallery.component';


@Component({
  template: `
		<daff-media-gallery>
			@for(image of images; track image) {
				<ng-template daffThumbnail [thumbnailSrc]="image.url" [label]="image.label">
					<daff-image 
						alt="{{ image.label }}"
						src="{{ image.url }}"
						width="594"
						height="737">
					</daff-image>
				</ng-template>
			}
		</daff-media-gallery>

	`,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
  ],
})
class WrapperComponent {
  images = [
    { url: '/path/to/file1.jpg', label: 'testlabel' },
    { url: '/path/to/file2.jpg', label: 'testlabel' },
  ];
}

describe('@daffodil/design/media-gallery | DaffMediaGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;
  let thumbnailButtons: NodeListOf<HTMLButtonElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
    thumbnailButtons = de.nativeElement.querySelectorAll('.daff-thumbnail');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the first element by default', () => {
    expect(thumbnailButtons[0].classList.contains('daff-selected')).toBeTrue();
  });
});


