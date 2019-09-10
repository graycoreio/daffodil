import { DaffSidebarMode } from "@daffodil/design";

import { ActivatedRouteSnapshot } from "@angular/router";

export const computeDeepestSidebarMode = (snapshot: ActivatedRouteSnapshot): DaffSidebarMode => {
  if(snapshot.firstChild){
    const mode = computeDeepestSidebarMode(snapshot.firstChild)
    if(mode) return mode;
  }

  if(snapshot.data){
    return snapshot.data.sidebarMode;
  }

  return undefined;
}