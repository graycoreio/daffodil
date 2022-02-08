import { DaffodilThemeEnum } from '../types/theme';
import { daffComputeThemeSetting } from './computer';

describe('daffComputeThemeSetting', () => {
  it('should return dark if there are no OS or storage preferences', () => {
    expect(daffComputeThemeSetting()).toEqual(DaffodilThemeEnum.Dark);
  });

  it('should return dark if OS preference is dark', () => {
    expect(daffComputeThemeSetting('dark')).toEqual(DaffodilThemeEnum.Dark);
  });

  it('should return light if OS preference is light', () => {
    expect(daffComputeThemeSetting('light')).toEqual(DaffodilThemeEnum.Light);
  });

  describe('having a stored preference', () => {
    it('should return the stored preference instead of OS preference', () => {
      expect(daffComputeThemeSetting('dark', 'light')).toEqual(DaffodilThemeEnum.Light);
    });
  });

  it('should allow the default theme to be overridden', () => {
    expect(daffComputeThemeSetting(undefined, undefined, 'light')).toEqual(DaffodilThemeEnum.Light);
  });
});
