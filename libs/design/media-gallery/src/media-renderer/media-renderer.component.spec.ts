import {
  Component,
  Type,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DaffSelectableDirective } from '@daffodil/design';
import { DaffArticleComponent } from '@daffodil/design/article';

import { DaffMediaRendererComponent } from './media-renderer.component';
import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';
import { daffThumbnailCompatToken } from '../thumbnail/thumbnail-compat.token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

@Component({
  selector: 'daff-mock-thumbnail1',
  template: '<ng-content></ng-content>',
  providers: [
    {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      provide: daffThumbnailCompatToken, useExisting: DaffMockThumbnail1Component,
    },
  ],
})
export class DaffMockThumbnail1Component {}

@Component({
  selector: 'daff-mock-thumbnail2',
  template: '<ng-content></ng-content>',
  providers: [
    {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      provide: daffThumbnailCompatToken, useExisting: DaffMockThumbnail2Component,
    },
  ],
})
export class DaffMockThumbnail2Component {}

describe('@daffodil/design/media-gallery | DaffMediaRendererComponent', () => {
  let component: DaffMediaRendererComponent;
  let fixture: ComponentFixture<DaffMediaRendererComponent>;
  let registry: DaffMediaGalleryRegistry;
  let mockThumbnail1: DaffThumbnailDirective;
  let mockThumbnail2: DaffThumbnailDirective;
  const stubRegistration: DaffMediaGalleryRegistration = {
    name: 'mockGallery',
  };

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [
        DaffMockThumbnail1Component,
        DaffMockThumbnail2Component,
      ],
      imports: [
        DaffArticleComponent,
        DaffMediaRendererComponent,
      ],
      providers: [
        {
          provide: DaffMediaGalleryRegistry,
          useValue: jasmine.createSpyObj('DaffMediaGalleryRegistry', ['add', 'remove', 'select']),
        },
        {
          provide: DAFF_MEDIA_GALLERY_TOKEN,
          useValue: stubRegistration,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffMediaRendererComponent);
    registry = TestBed.inject(DaffMediaGalleryRegistry);

    mockThumbnail1 = new DaffThumbnailDirective(null, null, stubRegistration, new DaffSelectableDirective(jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck'])));
    mockThumbnail1.component = <Type<unknown>><unknown>(new DaffArticleComponent());
    mockThumbnail2 = new DaffThumbnailDirective(null, null, stubRegistration, new DaffSelectableDirective(jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck'])));
    mockThumbnail1.select();
    mockThumbnail2.deselect();
    registry.galleries = {
      [stubRegistration.name]: new BehaviorSubject({
        gallery: stubRegistration,
        thumbnails: [
          mockThumbnail1,
          mockThumbnail2,
        ],
      }),
    };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the selected thumbnail', () => {
    const mockThumbnail1Element = fixture.debugElement.query(By.css('daff-mock-thumbnail1'));
    const mockThumbnail2Element = fixture.debugElement.query(By.css('daff-mock-thumbnail2'));
    expect(mockThumbnail1Element).toBeDefined();
    expect(mockThumbnail2Element).toBeNull();
  });
});
