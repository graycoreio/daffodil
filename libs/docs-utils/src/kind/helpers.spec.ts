import { DaffDocKind } from './enum';
import {
  daffDocsGetKind,
  daffDocsGetLinkUrl,
} from './helpers';

describe('@daffodil/docs-utils | daffDocsGetKind', () => {
  describe('for a API path', () => {
    it('should return API kind', () => {
      const path = '/libs/core/sub/src/symbol.ts';
      const result = daffDocsGetKind(path);
      expect(result).toEqual(DaffDocKind.API);
    });
  });

  describe('for a package guide path', () => {
    it('should return package kind', () => {
      const path = '/libs/core/guides/test/guide.md';
      const result = daffDocsGetKind(path);
      expect(result).toEqual(DaffDocKind.PACKAGE);
    });
  });

  describe('for a global guide path', () => {
    it('should return guide kind', () => {
      const path = '/docs/guides/test/guide.md';
      const result = daffDocsGetKind(path);
      expect(result).toEqual(DaffDocKind.GUIDE);
    });
  });

  describe('for a global explanation path', () => {
    it('should return explanation kind', () => {
      const path = '/docs/explanations/test/guide.md';
      const result = daffDocsGetKind(path);
      expect(result).toEqual(DaffDocKind.EXPLANATION);
    });
  });

  describe('for a design component path', () => {
    it('should return explanation kind', () => {
      const path = '/libs/design/component/README.md';
      const result = daffDocsGetKind(path);
      expect(result).toEqual(DaffDocKind.COMPONENT);
    });
  });
});

describe('@daffodil/docs-utils | daffDocsGetLinkUrl', () => {
  describe('for a API path', () => {
    it('should return an API link', () => {
      const path = '/libs/core/sub/src/symbol.ts';
      const result = daffDocsGetLinkUrl(path);
      expect(result).toEqual('/docs/api/core/sub/symbol');
    });
  });

  describe('for a package guide path', () => {
    it('should return a package link', () => {
      const path = '/libs/core/guides/test/guide.md';
      const result = daffDocsGetLinkUrl(path);
      expect(result).toEqual('/docs/packages/core/test/guide');
    });
  });

  describe('for a global guide path', () => {
    it('should return a guide link', () => {
      const path = '/docs/guides/test/guide.md';
      const result = daffDocsGetLinkUrl(path);
      expect(result).toEqual('/docs/guides/test/guide');
    });
  });

  describe('for a global explanation path', () => {
    it('should return an explanation link', () => {
      const path = '/docs/explanations/test/guide.md';
      const result = daffDocsGetLinkUrl(path);
      expect(result).toEqual('/docs/explanations/test/guide');
    });
  });
});
