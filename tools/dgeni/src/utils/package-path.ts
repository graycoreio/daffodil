import { Document } from 'dgeni';

/**
 * Returns `true` if `possibleSub` is a direct subpackage of `root`.
 */
export const isSubpackage = (root: Document, possibleSub: Document): boolean => {
  const rootSegs = root.id.split('/');
  const subSegs = possibleSub.id.split('/');
  return rootSegs.join() === subSegs.slice(0, subSegs.length - 1).join();
};
