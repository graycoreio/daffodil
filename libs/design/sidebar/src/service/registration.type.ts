import { Type } from '@angular/core';

/**
 * Represents a registration of a sidebar.
 * A collection of sidebar components is associated with an ID which can be passed to {@link DaffSidebarService#open}.
 */
export interface DaffSidebarRegistration {
  id: string;
  header?: Type<unknown>;
  body?: Type<unknown>;
  footer?: Type<unknown>;
}
