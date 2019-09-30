import { capitalize } from './capitalize';
import { sortedArrayInsert } from './sorted-array-insert';

export interface NavigationDocument {
  id: string;
  title: string;
  path: string;
}

/**
 * A class to form a navigation Prefix Trie from a list of navigation documents
 * where each document's id represents a path to a document and paths are
 * separated by the `/` character.
 */
export class NavigationTrie {
  id: string = '';
  path?: string;
  title: string = '';
  children: NavigationTrie[] = [];

  constructor(
    key: string = '',
    title: string = '',
    path: string = '',
    children: NavigationTrie[] = []
  ) {
    this.id = key;
    this.title = title;
    if (path) {
      this.path = path;
    }
    this.children = children;
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
    //If we've hit a word
    if (path.indexOf('/') == -1) {
      this.appendWord(path, doc);
      return;
    }

    const keyArray = path.split('/');
    const key = keyArray.shift();
    const newKey = keyArray.join('/');

    const child = this.appendBranch(key);

    child.insert(newKey, doc);
  }

  /**
   * Append a word node to the trie
   *
   * This is slightly different than a typical trie append
   * as we assume a the element is a word node if
   * its children is an empty array.
   *
   * @param path
   * @param doc
   */
  appendWord(path: string, doc: NavigationDocument) {
    let child = this.getExistingChild(path);

    //If no child exists, simply append the word
    if (!child) {
      this.appendChild(new NavigationTrie(path, doc.title, doc.path));
      return;
    }

    //If a child already exists, but that child isn't a word.
    if (child.children.length != 0) {
      child.title = doc.title;
      child.appendChild(new NavigationTrie('', 'Overview', doc.path));
      return;
    }

    // If theres already a child, we've already inserted a document that matches the path
    // of the document we're trying to insert. To ensure that we don't mysteriously lose
    // any documents over time we throw an error.
    if (child.path) {
      throw new Error(
        'Error: attempted to insert a document with a duplicate path: ' + child.path
      );
    }
  }


  /**
   * Append a branch onto the trie
   *
   * This is slightly different than a typical branch append to a trie
   * as we may have to transform a 'word' node into a true word
   *
   * @param key
   */
  appendBranch(path: string): NavigationTrie {
    let child = this.getExistingChild(path);
    // If there isn't a child, simply append the branch.
    if (!child) {
      child = new NavigationTrie(path, capitalize(path), '');
      this.appendChild(child);
    }

    //If there is a child, and it is a 'word' node, transform that
    //node into a true word node.
    else if (child && child.children.length == 0) {
      const node = new NavigationTrie('', 'Overview', child.path);
      delete (child.path);
      child.appendChild(node);
    }
    return child;
  }

  /**
   * Generically append a child element to the tree
   * @param element
   */
  appendChild(element: NavigationTrie) {
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
  getExistingChild(path: string): NavigationTrie | undefined {
    return this.children.find((child) => child.id == path);
  }
}

/**
 * @param items
 */
export const generateNavigationTrieFromDocuments = (items: NavigationDocument[] = []) => {
    const tree = new NavigationTrie();
    for (let doc of items) {
      tree.insert(doc.id, doc);
    }
    return tree;
}