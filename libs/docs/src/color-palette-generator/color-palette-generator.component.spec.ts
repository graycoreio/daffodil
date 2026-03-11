import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffDocsColorPaletteGeneratorComponent } from './color-palette-generator.component';

describe('@daffodil/docs | DaffDocsColorPaletteGeneratorComponent', () => {
  let component: DaffDocsColorPaletteGeneratorComponent;
  let fixture: ComponentFixture<DaffDocsColorPaletteGeneratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDocsColorPaletteGeneratorComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffDocsColorPaletteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with one palette on init', () => {
    expect(component.palettes().length).toBe(1);
  });

  it('should initialize the palette with the default hex color', () => {
    const palette = component.palettes()[0];
    expect(palette.hexColorControl.value).toBe('#EFEFEF');
    expect(palette.hue).toBeDefined();
    expect(palette.saturation).toBeDefined();
  });

  it('should generate palette colors for a valid initial hex', () => {
    const palette = component.palettes()[0];
    expect(palette.colors.length).toEqual(10);
  });

  describe('addPalette', () => {

    it('should add a palette with the given hex color', () => {
      component.addPalette('#00FF00');
      expect(component.palettes().length).toBe(2);
      const lastPalette = component.palettes()[component.palettes().length - 1];
      expect(lastPalette.hexColorControl.value).toBe('#00FF00');
      expect(lastPalette.hue).toBeDefined();
      expect(lastPalette.saturation).toBeDefined();
    });

    it('should generate colors for the given hex color', () => {
      component.addPalette('#0000FF');
      const lastPalette = component.palettes()[component.palettes().length - 1];
      expect(lastPalette.colors.length).toEqual(10);
    });

    it('should use the default hex when no argument is provided', () => {
      component.addPalette();
      const lastPalette = component.palettes()[component.palettes().length - 1];
      expect(lastPalette.hexColorControl.value).toBe('#EFEFEF');
    });
  });

  describe('deletePalette', () => {
    it('should remove a palette by id', () => {
      component.addPalette('#FF0000');
      expect(component.palettes().length).toBe(2);
      const idToRemove = component.palettes()[0].id;
      component.deletePalette(idToRemove);
      expect(component.palettes().length).toBe(1);
      expect(component.palettes().find((p) => p.id === idToRemove)).toBeUndefined();
    });
  });

  describe('palette color control value changes', () => {
    it('should update palette colors when the hex color control value changes to a valid color', () => {
      const palette = component.palettes()[0];
      const originalColors = [...palette.colors];
      palette.hexColorControl.setValue('#FF0000');
      fixture.detectChanges();
      const updatedPalette = component.palettes()[0];
      expect(updatedPalette.colors).not.toEqual(originalColors);
    });

    it('should not update palette colors when the hex color control value is invalid', () => {
      const palette = component.palettes()[0];
      const originalColors = [...palette.colors];
      const originalHue = palette.hue;
      palette.hexColorControl.setValue('invalid');
      fixture.detectChanges();
      const updatedPalette = component.palettes()[0];
      expect(updatedPalette.hue).toBe(originalHue);
      expect(updatedPalette.colors).toEqual(originalColors);
    });
  });

  describe('default template', () => {
    it('should render an add palette button', () => {
      const addButton = fixture.debugElement.query(By.css('[daff-stroked-button]'));
      expect(addButton).toBeTruthy();
      expect(addButton.nativeElement.textContent).toContain('Add palette');
    });

    it('should render palette strips', () => {
      const strips = fixture.debugElement.queryAll(By.css('.daffio-color-palette-generator__strip'));
      expect(strips.length).toBe(1);
    });

    it('should render color rows inside the strip', () => {
      const rows = fixture.debugElement.queryAll(By.css('.daffio-color-palette-generator__row'));
      expect(rows.length).toEqual(10);
    });

    it('should not render the remove button when there is only one palette', () => {
      const removeButtons = fixture.debugElement.queryAll(By.css('[daff-stroked-button]')).filter(
        (el) => el.nativeElement.textContent.includes('Remove'),
      );
      expect(removeButtons.length).toBe(0);
    });

    it('should render remove buttons when there are multiple palettes', () => {
      component.addPalette('#FF0000');
      fixture.detectChanges();

      const removeButtons = fixture.debugElement.queryAll(By.css('[daff-stroked-button]')).filter(
        (el) => el.nativeElement.textContent.includes('Remove'),
      );
      expect(removeButtons.length).toBe(2);
    });
  });
});
