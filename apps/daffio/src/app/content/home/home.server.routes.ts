import { RenderMode } from '@angular/ssr';

export const homeServerRoute: { path: string; renderMode: RenderMode.Prerender} = {
  path: '',
  renderMode: RenderMode.Prerender,
};
