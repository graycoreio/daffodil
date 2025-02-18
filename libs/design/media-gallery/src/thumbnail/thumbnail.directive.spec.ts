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

import { DaffThumbnailDirective } from './thumbnail.directive';
import { DaffMediaGalleryComponent } from '../media-gallery/media-gallery.component';

@Component({
  template: '',
  selector: 'daff-media-renderer',
  standalone: true,
})
class MockMediaRendererComponent {}

@Component({
  template: `
    <daff-media-gallery>
      <div daffThumbnail (becameSelected)="becameSelectedFunction()"></div>
    </daff-media-gallery>`,
  imports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
})
class WrapperComponent {
  becameSelectedFunction() {};
}

describe('@daffodil/design/media-gallery | DaffThumbnailDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let directive: DaffThumbnailDirective;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MockMediaRendererComponent,
        WrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
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

  describe('select', () => {

    let result;

    beforeEach(() => {
      spyOn(wrapper, 'becameSelectedFunction');
      directive.select();
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
      directive.select();
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
