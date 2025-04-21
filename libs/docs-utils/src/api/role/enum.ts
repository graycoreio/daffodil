/**
 * The role within the codebase that a particular symbol assumes.
 */
export enum DaffDocsApiRole {
  /**
   * An Angular component.
   */
  COMPONENT = 'component',
  /**
   * An Angular directive.
   */
  DIRECTIVE = 'directive',
  /**
   * An Angular pipe.
   */
  PIPE = 'pipe',
  /**
   * An Angular service.
   */
  SERVICE = 'service',
  /**
   * An Angular module.
   */
  MODULE = 'module',
  /**
   * An Angular routing guard.
   */
  GUARD = 'guard',
  /**
   * An Angular routing resolver.
   */
  RESOLVER = 'resolver',
  /**
   * A redux reducer.
   */
  REDUCER = 'reducer',
  /**
   * A redux action.
   */
  ACTION = 'action',
  /**
   * A facade class that abstracts redux state.
   */
  FACADE = 'facade',
  /**
   * A redux selector.
   */
  SELECTOR = 'selector',
  /**
   * A DI provider function.
   */
  PROVIDER = 'provider',
  /**
   * A DI injection token.
   */
  TOKEN = 'token',
  /**
   * An rxjs operator.
   */
  OPERATOR = 'operator',
  /**
   * An error class.
   */
  ERROR = 'error',
  /**
   * A TS enum, type, or interface.
   */
  // TODO: consider if types and interfaces should be separate, should this be renamed model?
  TYPE = 'type',
  /**
   * A constant value.
   */
  CONSTANT = 'constant',
  /**
   * A helper or utility class or function.
   */
  HELPER = 'helper',
  /**
   * A model factory for testing.
   */
  MODEL_FACTORY = 'model-factory',
  /**
   * A mock class for testing.
   */
  MOCK = 'mock',
}
