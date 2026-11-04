/**
 * The color treatment of a segment of terminal text.
 */
export type DaffioTerminalTone = 'success' | 'muted' | 'accent';

/**
 * A run of text within a terminal line.
 */
export interface DaffioTerminalSegment {
  text: string;
  tone?: DaffioTerminalTone;
}

/**
 * A single line of terminal output.
 */
export interface DaffioTerminalLine {
  segments: DaffioTerminalSegment[];
  /**
   * Whether the line is animated as if it's being typed.
   */
  typed?: boolean;
  /**
   * Whether a blinking cursor is shown at the end of the line.
   */
  cursor?: boolean;
  /**
   * Whether a spinner is shown at the start of the line.
   */
  spinner?: boolean;
}

/**
 * A step in a terminal animation. Steps run in order, each one changing the lines
 * shown in the terminal.
 */
export interface DaffioTerminalStep {
  /**
   * How long to wait, in milliseconds, before running this step.
   */
  delay: number;
  /**
   * The number of lines to remove from the end of the terminal before adding new lines.
   */
  remove?: number;
  /**
   * The lines to add to the end of the terminal.
   */
  add?: DaffioTerminalLine[];
}
