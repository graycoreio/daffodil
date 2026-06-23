import {
  Injectable,
  signal,
} from '@angular/core';

import { DaffSidebarSide } from '@daffodil/design/sidebar';

import { DaffViewportState } from './state';

@Injectable({
  providedIn: 'root',
})
export class DaffViewportService {

  state = signal<DaffViewportState>({
    sidebar: {
      left: undefined,
      right: undefined,
    },
  });

  open(side: DaffSidebarSide): void {
    this.state.update((state) => ({
      ...state,
      sidebar: {
        ...state.sidebar,
        [side]: {
          ...state.sidebar[side],
          open: true,
        },
      },
    }));
  }

  close(side: DaffSidebarSide): void {
    this.state.update((state) => ({
      ...state,
      sidebar: {
        ...state.sidebar,
        [side]: {
          ...state.sidebar[side],
          open: false,
        },
      },
    }));

  }
}
