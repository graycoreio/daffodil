import { computeDeepestRouteDataKey } from "./computeDeepestRouteDataKey";
import { ActivatedRouteSnapshot } from "@angular/router";

describe('computeDeepestSidebarMode', () => {
  it('should compute the deepest `sidebarMode` of an ActivatedRouteSnapshot tree', () => {
    const tree = { 
      data: {sidebarMode: "other"}, 
      firstChild: { 
        data: { 
          sidebarMode: "push" 
        } 
      } 
    } as unknown as ActivatedRouteSnapshot;
    
    expect(computeDeepestRouteDataKey(tree, 'mode')).toEqual("push");
  });

  it('should return undefined if there are no `sidebarMode`s in the tree', () => {
    const tree = { data: {}, firstChild: { data: { } } } as unknown as ActivatedRouteSnapshot;
    expect(computeDeepestRouteDataKey(tree, 'mode')).toEqual(undefined);

  })
})