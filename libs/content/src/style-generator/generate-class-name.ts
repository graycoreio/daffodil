let uniqueIdCounter = 0;

/**
 * Generates a unique class name for styled elements
 */
export const generateClassName = (): string => `schema-el-${uniqueIdCounter++}`;
