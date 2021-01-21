import { Route } from '@angular/router';

export type RouteWithoutPath = Omit<Route, 'path'>;
