export interface DesignLandCodeExampleFile {
  name: string;
  content: string;
  language: string;
}

export interface DesignLandCodeExample {
  /**
   * The custom element to render in the dom.
   * E.g. <my-custom-element></my-custom-element>
   */
  element: string;

  files: DesignLandCodeExampleFile[];
}