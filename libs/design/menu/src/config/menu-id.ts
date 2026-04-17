let daffMenuUniqueId = 0;

/**
 * Generates a unique menu ID for each menu instance.
 */
export const daffNextMenuId = (): string =>
  `daff-menu-${daffMenuUniqueId++}`;
