import {
  ActivatedRouteSnapshot,
  Data,
} from '@angular/router';

/**
 * Extracts a key from DaffPath data based upon the currently activated
 * RouteSnapshot.
 */
export const daffExtractDaffPathData = <T extends Data = Data>(snapshot: ActivatedRouteSnapshot, key: keyof T): unknown => {
  const pathFromRoot = snapshot.pathFromRoot[snapshot.pathFromRoot.length - 1].url.map((seg) => seg.path).join('/');
  return snapshot.data?.daffPaths?.[pathFromRoot]?.[key] ?? null;
};
