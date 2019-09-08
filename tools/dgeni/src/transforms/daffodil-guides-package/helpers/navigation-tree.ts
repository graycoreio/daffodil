import { capitalize } from "./capitalize";
import { sortedArrayInsert } from "./sorted-array-insert";

export interface NavigationDocument {
  id: string;
  title: string;
  path: string;
}

/**
 * A class to form a navigation Prefix Trie from a list of navigation documents
 * where each documents id represents a path that is 
 * separated by the `/` character.
 */
export class NavigationTree {
  id: string = '';
  path?: string;
  title: string = '';
  children: NavigationTree[] = [];

  // Add the document to the `documents` of the relevant child
  //Check to see if there's a parent document that needs to moved down,
  //If there is, shift it down.
  constructor(key: string = '', title: string = '', path: string = '', children: NavigationTree[] = []) {
    this.id = key;
    this.title = title;
    if(path){
      this.path = path;
    }
    this.children = children;
  }

  static generateTreeFromDocuments(items: NavigationDocument[] = []) {
    const tree = new NavigationTree();
    for (let doc of items) {
      tree.insert(doc.id, doc);
    }
    return tree;
  }

  /**
   * Note that this is implemented recursively, so for a large number
   * of nested documents, this will blow up. We don't anticipate 
   * this happening, as the depth of the trie should be 
   * artificially limited due to how docs folders are 
   * typically structured.
   * 
   * @param path 
   * @param doc 
   * @returns void
   */
  insert(path: string = '', doc: NavigationDocument): void {
    if (path.indexOf('/') == -1) {
      let child = this.getExistingChild(path);
      
      if(child && !child.path){
        child.title = doc.title;
        delete(child.path);
        child.appendChild(new NavigationTree('', 'Overview', doc.path));
      }
      else {
        this.appendChild(new NavigationTree(path, doc.title, doc.path));
      }
      return;
    }

    const keyArray = path.split('/');
    const key = keyArray.shift();
    const newKey = keyArray.join('/');

    let child = this.getExistingChild(key);
    if (!child) {
      child = new NavigationTree(key, capitalize(key), '');
      this.appendChild(child);
    }
    else if(child && child.path){
      const node = new NavigationTree("", 'Overview', child.path);
      delete(child.path);
      child.appendChild(node);
    }

    child.insert(newKey, doc);
  }

  appendChild(element: NavigationTree) {
    sortedArrayInsert(element, this.children, (a, b) => {
      if (a.id > b.id) { return 1; }
      if (a.id == b.id) { return 0; }
      if (a.id < b.id) { return -1; }
    })
  }

  /**
   * Determines whether or not a node has a particular child.
   * If it does, it returns it, otherwise it returns false.
   * 
   * @param path 
   */
  getExistingChild(path: string): NavigationTree | false {
    for (let child of this.children) {
      if (path == child.id) {
        return child;
      }
    }

    return false;
  }
}