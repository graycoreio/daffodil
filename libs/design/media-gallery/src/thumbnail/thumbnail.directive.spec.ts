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

import { daffThumbnailCompatToken } from './thumbnail-compat.token';
import { DaffThumbnailDirective } from './thumbnail.directive';
import { DaffMediaGalleryComponent } from '../media-gallery/media-gallery.component';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

@Component({
  template: `<daff-media-gallery><div daffThumbnail (becameSelected)="becameSelectedFunction()"></div></daff-media-gallery>`,
})
class WrapperComponent {
  becameSelectedFunction() {};
}

@Component({
  template: '',
  selector: 'daff-media-renderer',
})
class MockMediaRendererComponent {}

describe('DaffThumbnailDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let directive: DaffThumbnailDirective;
  let fixture: ComponentFixture<WrapperComponent>;
  let registry: DaffMediaGalleryRegistry;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffThumbnailDirective,
        DaffMediaGalleryComponent,
        WrapperComponent,
        MockMediaRendererComponent,
      ],
      providers: [
        {
          provide: DaffMediaGalleryRegistry,
          useValue: jasmine.createSpyObj('DaffMediaGalleryRegistry', ['add', 'remove', 'select']),
        },
        { provide: daffThumbnailCompatToken, useValue: DaffThumbnailDirective },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    registry = TestBed.inject(DaffMediaGalleryRegistry);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffThumbnail]'));
    directive = fixture.debugElement.query(By.directive(DaffThumbnailDirective)).injector.get(DaffThumbnailDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-thumbnail" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-thumbnail': true,
    }));
  });

  it('should add a "daff-thumbnail--selected" class when the thumbnail is selected', () => {
    directive.selected = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-thumbnail--selected': true,
    }));
  });

  it('should add itself to the media-gallery registry on initialization', () => {
    expect(registry.add).toHaveBeenCalledWith(directive.gallery, directive);
  });

  it('should notify the registry when the thumbnail is clicked', () => {
    de.nativeElement.click();
    fixture.detectChanges();

    expect(registry.select).toHaveBeenCalledWith(directive);
  });

  it('should remove itself from the registry when it is destroyed', () => {
    directive.ngOnDestroy();

    expect(registry.remove).toHaveBeenCalledWith(directive);
  });

  describe('select', () => {

    let result;

    beforeEach(() => {
      spyOn(wrapper, 'becameSelectedFunction');
      directive.selected = false;
      result = directive.select();
    });

    it('should set the thumbnail as selected', () => {
      expect(directive.selected).toEqual(true);
    });

    it('should notify that it became selected', () => {
      expect(wrapper.becameSelectedFunction).toHaveBeenCalled();
    });

    it('should return itself', () => {
      expect(result).toEqual(directive);
    });
  });

  describe('deselect', () => {

    let result;

    beforeEach(() => {
      spyOn(wrapper, 'becameSelectedFunction');
      directive.selected = true;
      result = directive.deselect();
    });

    it('should set the thumbnail as unselected', () => {
      expect(directive.selected).toEqual(false);
    });

    it('should return itself', () => {
      expect(result).toEqual(directive);
    });
  });
});
