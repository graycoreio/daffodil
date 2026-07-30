import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // ESLint's RuleTester integrates with the test runner through the global
    // `describe`/`it` functions, so they must be defined on globalThis.
    globals: true,
    include: ['**/*.spec.ts'],
  },
});
