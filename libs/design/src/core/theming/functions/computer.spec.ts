import { DaffTheme } from '../types/theme';
import { daffComputeThemeSetting } from './computer';

describe('daffComputeThemeSetting', () => {
  it('should return dark if there are no OS or storage preferences', () => {
    expect(daffComputeThemeSetting()).toEqual(DaffTheme.Dark);
  });

  it('should return dark if OS preference is dark', () => {
    expect(daffComputeThemeSetting(DaffTheme.Dark)).toEqual(DaffTheme.Dark);
  });

  it('should return light if OS preference is light', () => {
    expect(daffComputeThemeSetting(DaffTheme.Light)).toEqual(DaffTheme.Light);
  });

  describe('having a stored preference', () => {
    it('should return the stored preference instead of OS preference', () => {
      expect(daffComputeThemeSetting(DaffTheme.Dark, DaffTheme.Light)).toEqual(DaffTheme.Light);
    });
  });

  it('should allow the default theme to be overridden', () => {
    expect(daffComputeThemeSetting(undefined, undefined, DaffTheme.Light)).toEqual(DaffTheme.Light);
  });
});
