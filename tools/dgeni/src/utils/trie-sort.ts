export interface Trie {
  id: string;
  children: Array<Trie>;
}

/**
 * Defines the order of a trie's immediate children.
 */
export type TrieSortData = Record<Trie['id'], Array<Trie['id']>>;

/**
 * Sorts a trie top to bottom according to the passed sort data.
 * If the sort data does not contain data for a trie child, this function will throw an error.
 */
export const sortTrie = <T extends Trie>(trie: T, sortData: TrieSortData, parent = ''): T => {
  const path = parent && trie.id ? `${parent}/${trie.id}` : trie.id || parent;
  const sort = sortData[path];

  trie.children = trie.children
    .map((child) => child.children.length > 0 ? sortTrie(child, sortData, path) : child);

  if (sort) {
    trie.children = trie.children
      .sort((a, b) => {
        const aIndex = sort.indexOf(a.id);
        const bIndex = sort.indexOf(b.id);

        if (aIndex < 0) {
          throw new Error(`Sort data does not contain a reference to ${a.id}`);
        }
        if (bIndex < 0) {
          throw new Error(`Sort data does not contain a reference to ${b.id}`);
        }

        return aIndex - bIndex;
      });
  }

  return trie;
};
