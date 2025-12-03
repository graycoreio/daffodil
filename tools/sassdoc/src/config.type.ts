export interface SassDocConfig {
  src: string[];
  dest: string;
  theme: string;
  autofill: string[];
  groups: Record<string, string>;
  display: {
    access: string[];
    alias: boolean;
  };
  package: string;
  verbose: boolean;
  parse: boolean;
}
