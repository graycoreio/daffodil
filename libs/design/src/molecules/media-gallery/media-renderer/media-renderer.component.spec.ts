import { Type } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DaffArticleComponent } from '../../article/public_api';
import { DaffCardComponent } from '../../card/public_api';
import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';
import { daffThumbnailCompatToken } from '../thumbnail/thumbnail-compat.token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';
import { DaffMediaRendererComponent } from './media-renderer.component';

describe('DaffMediaRendererComponent', () => {
  let component: DaffMediaRendererComponent;
  let fixture: ComponentFixture<DaffMediaRendererComponent>;
  let registry: DaffMediaGalleryRegistry;
  let mockGallery: DaffMediaGalleryComponent;
  let mockThumbnail1: DaffThumbnailDirective;
  let mockThumbnail2: DaffThumbnailDirective;

  beforeEach(waitForAsync(() => {
    mockGallery = new DaffMediaGalleryComponent();
    TestBed.configureTestingModule({
      declarations: [
        DaffMediaRendererComponent,
        DaffArticleComponent,
        DaffCardComponent,
      ],
      providers: [
        {
          provide: DaffMediaGalleryRegistry,
          useValue: jasmine.createSpyObj('DaffMediaGalleryRegistry', ['add', 'remove', 'select']),
        },
        {
          provide: DaffMediaGalleryComponent,
          useValue: mockGallery,
        },
        { provide: daffThumbnailCompatToken, useExisting: DaffArticleComponent, multi: true },
        { provide: daffThumbnailCompatToken, useExisting: DaffCardComponent, multi: true },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffMediaRendererComponent);
    registry = TestBed.inject(DaffMediaGalleryRegistry);
    mockThumbnail1 = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGallery);
    mockThumbnail1.component = <Type<unknown>><unknown>(new DaffArticleComponent());
    mockThumbnail2 = new DaffThumbnailDirective(null, jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']), null, mockGallery);
    mockThumbnail2.component = <Type<unknown>><unknown>(new DaffCardComponent(null, null));
    mockThumbnail1.selected = true;
    mockThumbnail2.selected = false;
    registry.galleries = {
      [mockGallery.name]: new BehaviorSubject({
        gallery: mockGallery,
        thumbnails: [mockThumbnail1, mockThumbnail2],
      }),
    };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the selected thumbnail', () => {
    const articleComponent = fixture.debugElement.query(By.css('daff-article'));
    const cardComponent = fixture.debugElement.query(By.css('daff-card'));

    expect(articleComponent).toBeDefined();
    expect(cardComponent).toBeNull();
  });
});
