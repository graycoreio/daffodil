import {
  annotateDeprecations,
  getRemovalVersion,
  getStableVersion,
  hasRemovalMarker,
} from './deprecation';

describe('getStableVersion', () => {
  it('returns a stable version unchanged', () => {
    expect(getStableVersion('0.92.3')).toEqual('0.92.3');
  });

  it('strips a prerelease suffix', () => {
    expect(getStableVersion('1.0.0-rc.1')).toEqual('1.0.0');
  });
});

describe('getRemovalVersion', () => {
  it('removes pre-1.0 deprecations three minor versions later', () => {
    expect(getRemovalVersion('0.92.3')).toEqual('0.95.0');
  });

  it('removes post-1.0 deprecations in the next major version', () => {
    expect(getRemovalVersion('1.2.3')).toEqual('2.0.0');
  });
});

describe('annotateDeprecations', () => {
  it('annotates a bare @deprecated tag', () => {
    const content = [
      '/**',
      ' * @deprecated',
      ' */',
    ].join('\n');

    expect(annotateDeprecations(content, '0.92.3')).toEqual([
      '/**',
      ' * @deprecated Deprecated in version 0.92.3. Will be removed in version 0.95.0.',
      ' */',
    ].join('\n'));
  });

  it('annotates an @deprecated tag with a summary, preserving the summary', () => {
    const content = [
      '/**',
      ' * @deprecated Prefer {@link NewThing} instead.',
      ' */',
    ].join('\n');

    expect(annotateDeprecations(content, '0.92.3')).toEqual([
      '/**',
      ' * @deprecated Prefer {@link NewThing} instead. Deprecated in version 0.92.3. Will be removed in version 0.95.0.',
      ' */',
    ].join('\n'));
  });

  it('leaves already annotated tags untouched', () => {
    const content = [
      '/**',
      ' * @deprecated Deprecated in version 0.91.0. Will be removed in version 0.94.0.',
      ' */',
    ].join('\n');

    expect(annotateDeprecations(content, '0.92.3')).toEqual(content);
  });

  it('is idempotent', () => {
    const content = [
      '/**',
      ' * @deprecated Prefer {@link NewThing} instead.',
      ' */',
    ].join('\n');
    const once = annotateDeprecations(content, '0.92.3');

    expect(annotateDeprecations(once, '0.92.3')).toEqual(once);
  });

  it('annotates every unannotated tag in the content', () => {
    const content = [
      '/**',
      ' * @deprecated',
      ' */',
      'const a = 1;',
      '/**',
      ' * @deprecated use b instead',
      ' */',
      'const b = 2;',
    ].join('\n');

    const annotated = annotateDeprecations(content, '0.92.3');

    expect(annotated.match(/Deprecated in version 0\.92\.3/g).length).toEqual(2);
  });

  it('leaves content without @deprecated tags untouched', () => {
    const content = 'const a = 1;\n';

    expect(annotateDeprecations(content, '0.92.3')).toEqual(content);
  });
});

describe('hasRemovalMarker', () => {
  const content = [
    '/**',
    ' * @deprecated Deprecated in version 0.90.0. Will be removed in version 0.93.0.',
    ' */',
  ].join('\n');

  it('returns true when a symbol is marked for removal in the given version', () => {
    expect(hasRemovalMarker(content, '0.93.0')).toBeTrue();
  });

  it('returns false when no symbol is marked for removal in the given version', () => {
    expect(hasRemovalMarker(content, '0.92.0')).toBeFalse();
  });

  it('returns false for content without deprecations', () => {
    expect(hasRemovalMarker('const a = 1;', '0.93.0')).toBeFalse();
  });
});
