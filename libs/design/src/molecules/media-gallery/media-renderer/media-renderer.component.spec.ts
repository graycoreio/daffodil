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

import { DaffArticleComponent } from '../../article/public_api';
import { DaffCardComponent } from '../../card/public_api';
import { DaffMediaGalleryRegistration } from '../media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';
import { daffThumbnailCompatToken } from '../thumbnail/thumbnail-compat.token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';
import { DaffMediaRendererComponent } from './media-renderer.component';

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

describe('DaffMediaRendererComponent', () => {
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
        DaffMediaRendererComponent,
        DaffArticleComponent,
        DaffCardComponent,
        DaffMockThumbnail1Component,
        DaffMockThumbnail2Component,
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

    mockThumbnail1 = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, stubRegistration);
    mockThumbnail1.component = <Type<unknown>><unknown>(new DaffArticleComponent());
    mockThumbnail2 = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, stubRegistration);
    mockThumbnail1.selected = true;
    mockThumbnail2.selected = false;
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
