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

import { DaffMediaGalleryComponent } from './media-gallery.component';
import { DaffMediaGalleryRegistry } from './registry/media-gallery.registry';
import { daffThumbnailCompatToken } from './thumbnail/thumbnail-compat.token';
import { DaffThumbnailDirective } from './thumbnail/thumbnail.directive';

@Component({
  template: `<daff-media-gallery [name]="nameValue">
		<div daffThumbnail></div>
	</daff-media-gallery>`,
})
class WrapperComponent {
	nameValue: string;
}

@Component({
  template: '',
  selector: 'daff-media-renderer',
})
class MockMediaRendererComponent {}

describe('DaffMediaGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;
  const stubName = 'some name';
  let registry: DaffMediaGalleryRegistry;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        MockMediaRendererComponent,
        DaffMediaGalleryComponent,
        DaffThumbnailDirective,
      ],
      providers: [
        { provide: daffThumbnailCompatToken, useValue: DaffThumbnailDirective },
        DaffMediaGalleryRegistry,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.nameValue = stubName;
    registry = TestBed.inject(DaffMediaGalleryRegistry);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a daff-media-gallery class to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-media-gallery': true,
    }));
  });

  it('should take a name as input', () => {
    expect(component.name).toEqual(stubName);
  });

  it('should remove the gallery from the registry when the gallery is destroyed', () => {
    spyOn(registry, 'remove');
    component.ngOnDestroy();

    expect(registry.remove).toHaveBeenCalledWith(component);
  });
});

@Component({
  template: '<daff-media-gallery></daff-media-gallery>',
})
class DefaultWrapperComponent {}

describe('DaffMediaGalleryComponent - default', () => {
  let wrapper: DefaultWrapperComponent;
  let fixture: ComponentFixture<DefaultWrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffMediaGalleryComponent,
        MockMediaRendererComponent,
        DaffThumbnailDirective,
        DefaultWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
  });

  it('should set the name to a unique id if a name is not provided', () => {
    expect(component.name).not.toEqual('');
    expect(component.name).toEqual(jasmine.any(String));
  });
});
