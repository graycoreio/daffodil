/**
   * Interface representing a file of a component.
   * 
   * */
export interface DesignLandCodeExampleFile {
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

export interface DesignLandCodeExample {
  /**
   * The custom element to render in the dom.
   * E.g. <my-custom-element></my-custom-element>
   */
  element: string;

  /**
   * The List of Files associated with the component.
   */
  files: DesignLandCodeExampleFile[];
}