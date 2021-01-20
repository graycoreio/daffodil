import { DocumentNode } from 'graphql';
/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
export declare function getCategoryNodeFragment(depth?: number): DocumentNode;
