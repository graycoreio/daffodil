import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { DaffDocsPalette } from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';
import { DaffDocsPaletteFactory } from '@daffodil/documentation/testing';

import { DaffDocsColorPalettesComponent } from './color.component';

describe('@daffodil/docs-components | DaffDocsColorPalettesComponent', () => {
  let component: DaffDocsColorPalettesComponent;
  let fixture: ComponentFixture<DaffDocsColorPalettesComponent>;

  let paletteFactory: DaffDocsPaletteFactory;
  let docServiceSpy: jasmine.SpyObj<DaffDocsAssetService>;
  let mockPalette: DaffDocsPalette;

  beforeEach(waitForAsync(() => {
    docServiceSpy = jasmine.createSpyObj('DaffDocsAssetService', ['get']);

    TestBed.configureTestingModule({
      imports: [
        DaffDocsColorPalettesComponent,
      ],
      providers: [
        {
          provide: DaffDocsAssetService,
          useValue: docServiceSpy,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    paletteFactory = TestBed.inject(DaffDocsPaletteFactory);
    mockPalette = paletteFactory.create();
    docServiceSpy.get.withArgs('docs/palettes/base').and.returnValue(of({
      id: 'id',
      title: 'title',
      contents: JSON.stringify(mockPalette),
    }));

    fixture = TestBed.createComponent(DaffDocsColorPalettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should a palette for each color', () => {
    Object.keys(mockPalette).forEach((color) => {
      const palette = fixture.debugElement.query(By.css(`.daff-docs-color__palette.daff-docs-color__brand-${color.toLowerCase()}`));
      expect(palette).toBeDefined();
      Object.keys(mockPalette[color]).forEach((shade) => {
        expect((<HTMLElement>palette.nativeElement).innerHTML).toContain(shade);
        expect((<HTMLElement>palette.nativeElement).innerHTML).toContain(mockPalette[color][shade]);
      });
    });
  });
});
