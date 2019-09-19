import { ActivatedRouteSnapshot } from "@angular/router";

export const computeDeepestRouteDataKey= <T>(snapshot: ActivatedRouteSnapshot, key: string): T => {
  if(snapshot.firstChild){
    const data = computeDeepestRouteDataKey<T>(snapshot.firstChild, key)
    if(data) return data;
  }

  if(snapshot.data){
    return snapshot.data[key];
  }

  return undefined;
}