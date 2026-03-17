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
    expect(component.palettes.size).toBe(1);
  });

  it('should initialize the palette with the default hex color', () => {
    const palette = [...component.palettes.values()][0];
    expect(palette.hexColorControl.value).toBe('#EFEFEF');
    expect(palette.hue).toBeDefined();
    expect(palette.saturation).toBeDefined();
  });

  it('should generate palette colors for a valid initial hex', () => {
    const palette = [...component.palettes.values()][0];
    expect(palette.colors.length).toEqual(10);
  });

  describe('addPalette', () => {
    it('should add a palette with the default hex color', () => {
      component.addPalette();
      expect(component.palettes.size).toBe(2);
      const palettes = [...component.palettes.values()];
      const lastPalette = palettes[palettes.length - 1];
      expect(lastPalette.hexColorControl.value).toBe('#EFEFEF');
    });

    it('should generate colors for the default hex color', () => {
      component.addPalette();
      const palettes = [...component.palettes.values()];
      const lastPalette = palettes[palettes.length - 1];
      expect(lastPalette.colors.length).toEqual(10);
    });
  });

  describe('changing a palette color', () => {
    it('should update the palette hex color value', () => {
      component.addPalette();
      const palette = [...component.palettes.values()][1];
      palette.hexColorControl.setValue('#FF0000');
      fixture.detectChanges();
      expect(palette.hexColorControl.value).toBe('#FF0000');
    });

    it('should generate colors for the new hex color', () => {
      component.addPalette();
      const palette = [...component.palettes.values()][1];
      const originalColors = [...palette.colors];
      palette.hexColorControl.setValue('#FF0000');
      fixture.detectChanges();
      const updatedPalette = [...component.palettes.values()][1];
      expect(updatedPalette.colors.length).toEqual(10);
      expect(updatedPalette.colors).not.toEqual(originalColors);
    });

    it('should not update palette colors when the hex color control value is invalid', () => {
      const palette = [...component.palettes.values()][0];
      const originalColors = [...palette.colors];
      const originalHue = palette.hue;
      palette.hexColorControl.setValue('invalid');
      fixture.detectChanges();
      const updatedPalette = [...component.palettes.values()][0];
      expect(updatedPalette.hue).toBe(originalHue);
      expect(updatedPalette.colors).toEqual(originalColors);
    });
  });

  describe('deletePalette', () => {
    it('should remove a palette by id', () => {
      component.addPalette();
      expect(component.palettes.size).toBe(2);
      const idToRemove = [...component.palettes.values()][0].id;
      component.deletePalette(idToRemove);
      expect(component.palettes.size).toBe(1);
      expect(component.palettes.has(idToRemove)).toBe(false);
    });
  });

  describe('default template', () => {
    it('should render a new palette button and an export palettes button', () => {
      const buttons = fixture.debugElement.queryAll(By.css('[daff-stroked-button]'));
      expect(buttons.length).toBe(2);
      expect(buttons[0].nativeElement.textContent).toContain('New palette');
      expect(buttons[1].nativeElement.textContent).toContain('Export palettes');
    });

    it('should not render the remove button when there is only one palette', () => {
      const removeButtons = fixture.debugElement.queryAll(By.css('[daff-icon-button]'));
      expect(removeButtons.length).toBe(0);
    });

    it('should render remove buttons when there are multiple palettes', () => {
      component.addPalette();
      fixture.detectChanges();

      const removeButtons = fixture.debugElement.queryAll(By.css('[daff-icon-button]'));
      expect(removeButtons.length).toBe(2);
    });
  });
});
