import { DaffNavDoc } from '@daffodil/docs-utils';

import { capitalize } from './capitalize';
import { sortedArrayInsert } from './sorted-array-insert';

/**
 * A class to form a navigation Prefix Trie from a list of navigation documents
 * where each document's id represents a path to a document and paths are
 * separated by the `/` character.
 */
export class NavigationTrie<T extends DaffNavDoc = DaffNavDoc> {
  children: Array<NavigationTrie<T>> = [];

  get id(): T['id'] {
    return this._doc.id;
  }

  get path(): T['path'] {
    return this._doc.path;
  }

  set title(v: T['title']) {
    this._doc.title = v;
  }

  constructor(
    private _doc: T,
  ) {}

  toJSON(): T {
    return {
      ...this._doc,
      children: this.children,
      path: this.children.length ? undefined : this._doc.path,
    };
  }

  /**
   * Note that this is implemented recursively, so for a large number
   * of nested documents, this will blow up. We don't anticipate
   * this happening, as the depth of the trie should be
   * artificially limited due to how docs folders are
   * typically structured.
   */
  insert(id: string = '', doc: T): void {
    //If we've hit a word
    if (id.indexOf('/') === -1) {
      this.appendWord(id, doc);
      return;
    }

    const keyArray = id.split('/');
    const key = keyArray.shift();
    const newKey = keyArray.join('/');

    const child = this.appendBranch(key, doc);

    child.insert(newKey, doc);
  }

  /**
   * Append a word node to the trie
   *
   * This is slightly different than a typical trie append
   * as we assume a the element is a word node if
   * its children is an empty array.
   */
  appendWord(id: string, doc: T) {
    const child = this.getExistingChild(id);

    //If no child exists, simply append the word
    if (!child) {
      this.appendChild(new NavigationTrie({
        ...doc,
        id,
      }));
      return;
    }

    //If a child already exists, but that child isn't a word.
    if (child.children.length !== 0) {
      child.title = doc.title;
      child.appendChild(new NavigationTrie({
        ...doc,
        id: '',
        title: 'Overview',
      }));
      return;
    }

    // If theres already a child, we've already inserted a document that matches the id
    // of the document we're trying to insert. To ensure that we don't mysteriously lose
    // any documents over time we throw an error.
    if (child.id) {
      throw new Error(
        'Error: attempted to insert a document with a duplicate path: ' + child.path,
      );
    }
  }

  /**
   * Append a branch onto the trie
   *
   * This is slightly different than a typical branch append to a trie
   * as we may have to transform a 'word' node into a true word
   */
  appendBranch(id: string, doc: T): NavigationTrie<T> {
    let child = this.getExistingChild(id);
    // If there isn't a child, simply append the branch.
    if (!child) {
      child = new NavigationTrie({
        ...doc,
        id,
        title: capitalize(id),
      });
      this.appendChild(child);
    } else if (child && child.children.length === 0) {
      //If there is a child, and it is a 'word' node, transform that
      //node into a true word node.
      const node = new NavigationTrie({
        ...doc,
        id: '',
        title: 'Overview',
        path: child.path,
      });
      child.appendChild(node);
    }
    return child;
  }

  /**
   * Generically append a child element to the tree
   *
   * @param element
   */
  appendChild(element: NavigationTrie<T>) {
    sortedArrayInsert(element, this.children, (a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id === b.id) {
        return 0;
      }
      if (a.id < b.id) {
        return -1;
      }
    });
  }

  /**
   * Determines whether or not a node has a particular child.
   * If it does, it returns it, otherwise it returns false.
   */
  getExistingChild(id: string): NavigationTrie<T> | undefined {
    return this.children.find((child) => child.id === id);
  }
}

/**
 * @param items
 */
export const generateNavigationTrieFromDocuments = <T extends DaffNavDoc = DaffNavDoc>(
  items: Array<T>,
  root: T,
): NavigationTrie<T> => {
  const tree = new NavigationTrie(root);
  for (const doc of items) {
    tree.insert(doc.id, doc);
  }
  return tree;
};
