/**
 * List of packages to be left out of API generation
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES = <const>[
  'branding',
  'design',
  'documentation',
  'docs-components',
  'docs-utils',
  'theme-switch',
];

/**
 * Regex of list of package names to be left out of API generation
 */
export const DAFF_DGENI_EXCLUDED_PACKAGES_REGEX = '!(' + DAFF_DGENI_EXCLUDED_PACKAGES.join('|') + ')';
