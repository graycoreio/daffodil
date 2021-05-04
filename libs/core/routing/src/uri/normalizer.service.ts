import { Injectable } from '@angular/core';
import {
  UrlSerializer,
  UrlTree,
  PRIMARY_OUTLET,
} from '@angular/router';

/**
 * Processes URIs to remove extraneous Angular-specific information.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffRoutingUriNormalizer {
  constructor(
    private urlParser: UrlSerializer,
  ) {}

  /**
   * Normalizes an Angular router path into a useable URI.
   * e.g. `normalize('some/url.html(secondary:outlet)?query=param#fragment')` -> `'some/url.html?query=param#fragment'`
   *
   * Optionally accepts an outlet to target.
   * e.g. `normalize('some/url.html(secondary:outlet)?query=param#fragment', 'secondary')` -> `'some/outlet?query=param#fragment'`
   *
   * @param uri The URI to normalize.
   * @param outlet An optional outlet to process into a URI.
   */
  normalize(uri: string, outlet = PRIMARY_OUTLET): string {
    const urlTree: UrlTree = this.urlParser.parse(uri);
    urlTree.root.children = {
      [PRIMARY_OUTLET]: urlTree.root.children[outlet],
    };

    return this.urlParser.serialize(urlTree);
  }
}
