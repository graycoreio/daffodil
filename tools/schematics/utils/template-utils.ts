import { Tree } from '@angular-devkit/schematics';
import { insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';

export function addTemplateToComponent(
  tree: Tree,
  componentTsPath: string,
  templatePath: string,
  templateContent: string,
  componentName: string,
  packageName: string,
): Tree {
  if (!tree.exists(componentTsPath)) {
    throw new Error(`Component ${componentTsPath} not found`);
  }

  if (!tree.exists(templatePath)) {
    throw new Error(`Template ${templatePath} not found`);
  }

  // Add component to the template
  const templateSource = tree.read(templatePath);
  if (!templateSource) {
    throw new Error(`Could not read template ${templatePath}`);
  }

  let currentTemplateContent = templateSource.toString();

  // If router-outlet exists, add after it
  if (currentTemplateContent.includes('<router-outlet')) {
    const routerOutletRegex = /(<router-outlet[^>]*(?:\/>|><\/router-outlet>))/;
    currentTemplateContent = currentTemplateContent.replace(routerOutletRegex, `$1${templateContent}`);
  } else {
    // If no router-outlet, just append to the end
    currentTemplateContent = currentTemplateContent.trimEnd() + templateContent + '\n';
  }

  tree.overwrite(templatePath, currentTemplateContent);

  // Add the import to the component TypeScript file
  const componentSource = tree.read(componentTsPath);
  if (!componentSource) {
    throw new Error(`Could not read component ${componentTsPath}`);
  }

  const sourceText = componentSource.toString();
  const source = ts.createSourceFile(componentTsPath, sourceText, ts.ScriptTarget.Latest, true);

  // Add import for component
  const change = insertImport(source, componentTsPath, componentName, packageName);
  let updatedContent = sourceText;

  if (change instanceof InsertChange) {
    updatedContent = updatedContent.slice(0, change.pos) + change.toAdd + updatedContent.slice(change.pos);
  }

  // Add to imports array in @Component decorator
  if (updatedContent.includes('imports: [')) {
    const importsStart = updatedContent.indexOf('imports: [');
    const bracketStart = importsStart + 'imports: ['.length;

    // Find the matching closing bracket
    let bracketCount = 1;
    let bracketEnd = bracketStart;
    for (let i = bracketStart; i < updatedContent.length && bracketCount > 0; i++) {
      if (updatedContent[i] === '[') {
        bracketCount++;
      }
      if (updatedContent[i] === ']') {
        bracketCount--;
      }
      if (bracketCount === 0) {
        bracketEnd = i;
        break;
      }
    }

    const existingImports = updatedContent.substring(bracketStart, bracketEnd).trim();
    let newImports: string;
    if (existingImports) {
      const cleanExisting = existingImports.replace(/,\s*$/, '');
      newImports = `${cleanExisting}, ${componentName}`;
    } else {
      newImports = componentName;
    }

    updatedContent = updatedContent.substring(0, bracketStart) + newImports + updatedContent.substring(bracketEnd);
  } else {
    // Add imports array if it doesn't exist in @Component
    const componentRegex = /(@Component\s*\(\s*{[^}]*)(}\s*\))/s;
    const match = updatedContent.match(componentRegex);
    if (match) {
      const importsArray = `imports: [${componentName}],\n  `;
      updatedContent = updatedContent.replace(componentRegex, `$1${importsArray}$2`);
    }
  }

  tree.overwrite(componentTsPath, updatedContent);
  return tree;
}
