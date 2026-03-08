import { PackagePathConfig } from './path-config';

/**
 * Flags indicating which categories of source paths were affected
 * by a set of changed files.
 */
export interface ChangeFlags {
  /**
   * True if any shared path (e.g. `libs/core/`, `tools/schematics/`) was changed.
   */
  shared: boolean;
  /**
   * True if a demo-only path (e.g. `libs/dev-tools/`) was changed.
   */
  demoOnly: boolean;
  /**
   * Per-driver flag keyed by driver name (e.g. `"magento"`, `"in-memory"`).
   */
  drivers: Record<string, boolean>;
}

export const classifyChanges = (changedFiles: string[], config: PackagePathConfig): ChangeFlags => {
  const flags: ChangeFlags = {
    shared: false,
    demoOnly: false,
    drivers: Object.fromEntries(Object.keys(config.drivers).map((d) => [d, false])),
  };

  for (const file of changedFiles) {
    if (!file) {
      continue;
    }
    if (config.shared.some((p) => file.startsWith(p))) {
      flags.shared = true;
    }
    if (config.demoOnly.some((p) => file.startsWith(p))) {
      flags.demoOnly = true;
    }
    for (const [driverName, paths] of Object.entries(config.drivers)) {
      if (paths.some((p) => file.startsWith(p))) {
        flags.drivers[driverName] = true;
      }
    }
  }

  return flags;
};
