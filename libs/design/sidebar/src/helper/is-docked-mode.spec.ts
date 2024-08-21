import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';

import { daffSidebarIsDockedMode } from './is-docked-mode';

describe('@daffodil/design/sidebar | daffSidebarIsDockedMode', () => {
  it('should be true for side', () => {
    expect(daffSidebarIsDockedMode(DaffSidebarModeEnum.Side)).toBeTrue();
  });

  it('should be true for side fixed', () => {
    expect(daffSidebarIsDockedMode(DaffSidebarModeEnum.SideFixed)).toBeTrue();
  });

  it('should be false for under', () => {
    expect(daffSidebarIsDockedMode(DaffSidebarModeEnum.Under)).toBeFalse();
  });

  it('should be false for over', () => {
    expect(daffSidebarIsDockedMode(DaffSidebarModeEnum.Over)).toBeFalse();
  });
});
