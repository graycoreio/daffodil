export const DAFF_DGENI_EXCLUDED_PACKAGES = <const>[
  'branding',
  'documentation',
  'docs-components',
  'docs-utils',
  'theme-switch',
];
export const DAFF_DGENI_EXCLUDED_PACKAGES_REGEX = '!(' + DAFF_DGENI_EXCLUDED_PACKAGES.join('|') + ')';
