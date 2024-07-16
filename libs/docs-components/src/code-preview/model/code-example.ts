import { DaffDocsComponentExample } from '@daffodil/documentation';

/**
 * Interface representing a file of a component.
 *
 * */
export interface DaffDocsCodeExampleFile {
  /**
   * Name of the file
   * E.g. "component.html"
   */
  name: string;
  /**
   * Content of the file
   * E.g. "<button>Content</button>"
   */
  content: string;
  /**
   * Language of the file
   * E.g. "html"
   */
  language: string;
}

export interface DaffDocsCodeExample {
  /**
   * The component class to render.
   */
  component: DaffDocsComponentExample;

  /**
   * The List of Files associated with the component.
   */
  files: DaffDocsCodeExampleFile[];
}
