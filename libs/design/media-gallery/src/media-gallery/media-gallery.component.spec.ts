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
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';
import { daffThumbnailCompatToken } from '../thumbnail/thumbnail-compat.token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

@Component({
  template: `
    <daff-media-gallery [name]="nameValue" [skeleton]="skeleton">
      <div daffThumbnail></div>
    </daff-media-gallery>
  `,
  imports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
})
class WrapperComponent {
  nameValue: string;
  skeleton = false;
}

@Component({
  template: '',
  selector: 'daff-media-renderer',
  standalone: false,
})
class MockMediaRendererComponent {}

describe('@daffodil/design/media-gallery | DaffMediaGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;
  const stubName = 'some name';
  let registry: DaffMediaGalleryRegistry;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockMediaRendererComponent,
      ],
      imports: [
        WrapperComponent,
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

  it('should take skeleton as an input', () => {
    wrapper.skeleton = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });

  it('should remove the gallery from the registry when the gallery is destroyed', () => {
    spyOn(registry, 'remove');
    component.ngOnDestroy();

    expect(registry.remove).toHaveBeenCalledWith(component);
  });
});

@Component({
  template: '<daff-media-gallery></daff-media-gallery>',
  imports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
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
        MockMediaRendererComponent,
      ],
      imports: [
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
