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
 * If the sort data does not contain data for a trie child, it is sorted after all children with sort data.
 */
export const sortTrie = <T extends Trie>(trie: T, sortData: TrieSortData): T => {
  if (sortData[trie.id]) {
    trie.children = trie.children.sort((a, b) => {
      const aIndex = sortData[trie.id].indexOf(a.id);
      const bIndex = sortData[trie.id].indexOf(b.id);

      return aIndex === bIndex
        ? 0
        : aIndex < 0
          ? 1
          : bIndex < 0
            ? -1
            : aIndex - bIndex;
    });
  }
  trie.children = trie.children.map((child) => sortTrie(child, sortData));

  return trie;
};
