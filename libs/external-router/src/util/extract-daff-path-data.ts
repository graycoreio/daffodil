import {
  ActivatedRouteSnapshot,
  Data,
} from '@angular/router';

/**
 * Extracts a key from DaffPath data based upon the currently activated
 * RouteSnapshot.
 */
export const daffExtractDaffPathData = <T extends Data = Data, K extends keyof T = keyof T>(snapshot: ActivatedRouteSnapshot, key: K): T[K] => {
  const pathFromRoot = snapshot.pathFromRoot.flatMap((route) => route.url).map((seg) => seg.path).join('/');
  return snapshot.data?.daffPaths?.[pathFromRoot]?.[key] ?? null;
};
