import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';

import { daffSidebarIsFloatingMode } from './is-floating-mode';

describe('@daffodil/design/sidebar | daffSidebarIsFloatingMode', () => {
  it('should be false for side', () => {
    expect(daffSidebarIsFloatingMode(DaffSidebarModeEnum.Side)).toBeFalse();
  });

  it('should be false for side fixed', () => {
    expect(daffSidebarIsFloatingMode(DaffSidebarModeEnum.SideFixed)).toBeFalse();
  });

  it('should be true for under', () => {
    expect(daffSidebarIsFloatingMode(DaffSidebarModeEnum.Under)).toBeTrue();
  });

  it('should be true for over', () => {
    expect(daffSidebarIsFloatingMode(DaffSidebarModeEnum.Over)).toBeTrue();
  });
});
