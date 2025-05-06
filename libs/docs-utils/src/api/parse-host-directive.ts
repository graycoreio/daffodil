const REGEX = /(directive: (?<directive>\w+))|(inputs: (?<inputs>\[.+\]))|(outputs: (?<outputs>\[.+\]))/g;

type Groups = Partial<{
  directive: string;
  inputs: string;
  outputs: string;
}>;

export const daffDocsApiParseHostDirective = (hostDirective: string): Groups =>
  [...hostDirective.matchAll(REGEX)].reduce((groups, match) => {
    // eslint-disable-next-line guard-for-in
    for (const k in match.groups) {
      groups[k] = match.groups[k] ?? groups[k];
    }
    return groups;
  }, <Groups>{});
