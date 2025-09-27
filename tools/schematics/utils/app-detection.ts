import { Tree } from '@angular-devkit/schematics';

/**
 * Determines if an Angular project uses the standalone app architecture.
 *
 * This function checks for the presence of specific files and patterns to distinguish
 * between module-based and standalone Angular applications:
 *
 * 1. If `app-module.ts` exists, it's a module-based app
 * 2. If `app.config.ts` exists, it's a standalone app
 * 3. If `main.ts` contains `bootstrapApplication`, it's a standalone app
 *
 * @param tree - The Angular DevKit schematics tree for file system operations
 * @param project - The Angular workspace project configuration
 * @returns `true` if the app uses standalone architecture, `false` if module-based
 */
export function isStandaloneApp(tree: Tree, project: any): boolean {
  const appModulePath = `${project.sourceRoot}/app/app-module.ts`;
  const appConfigPath = `${project.sourceRoot}/app/app.config.ts`;
  const mainPath = `${project.sourceRoot}/main.ts`;

  // Check if app-module.ts exists
  if (tree.exists(appModulePath)) {
    return false; // Module-based app
  }

  // Check if app.config.ts exists or main.ts has standalone bootstrap
  if (tree.exists(appConfigPath)) {
    return true; // Standalone app with app.config.ts
  }

  // Check main.ts for standalone bootstrap
  if (tree.exists(mainPath)) {
    const mainContent = tree.read(mainPath)?.toString();
    if (mainContent && mainContent.includes('bootstrapApplication')) {
      return true; // Standalone app
    }
  }

  return false; // Default to module-based
}
