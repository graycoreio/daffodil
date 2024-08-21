import { Type } from '@angular/core';

export interface DaffSidebarRegistration {
  id: string;
  header?: Type<unknown>;
  body?: Type<unknown>;
  footer?: Type<unknown>;
}
