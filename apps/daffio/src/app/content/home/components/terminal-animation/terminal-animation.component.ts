import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';

import {
  DaffioTerminalLine,
  DaffioTerminalStep,
} from './terminal-step.type';

/**
 * Builds the lines shown in the terminal after each step of the script.
 * The first entry is the empty terminal and the last entry is the end state.
 */
const buildSnapshots = (script: DaffioTerminalStep[]): DaffioTerminalLine[][] =>
  script.reduce<DaffioTerminalLine[][]>((snapshots, step) => {
    const previous = snapshots[snapshots.length - 1];
    const kept = step.remove ? previous.slice(0, Math.max(previous.length - step.remove, 0)) : previous;
    return [...snapshots, [...kept, ...(step.add ?? [])]];
  }, [[]]);

@Component({
  selector: 'daffio-terminal-animation',
  templateUrl: './terminal-animation.component.html',
  styleUrl: './terminal-animation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daffio-terminal-animation',
    role: 'figure',
    '[attr.aria-label]': 'label()',
  },
})
export class DaffioTerminalAnimationComponent {
  private doc = inject(DOCUMENT);

  /**
   * The steps that make up the terminal session.
   */
  readonly script = input.required<DaffioTerminalStep[]>();

  /**
   * A description of the terminal session for assistive tech.
   */
  readonly label = input.required<string>();

  /**
   * How long to hold the end state, in milliseconds, before the animation restarts.
   */
  readonly holdDuration = input(3000);

  private readonly snapshots = computed(() => buildSnapshots(this.script()));
  private readonly finalStep = computed(() => this.snapshots().length - 1);

  /**
   * The index of the current snapshot. Starts at the end state so that the
   * server render and reduced motion users see the finished session.
   */
  private readonly step = signal<number | null>(null);

  readonly lines = computed(() => this.snapshots()[this.step() ?? this.finalStep()]);

  readonly transcript = computed(() =>
    this.snapshots()[this.finalStep()]
      .map((line) => line.segments.map((segment) => segment.text).join(''))
      .join('\n'),
  );

  private timeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    afterNextRender(() => {
      if (!this.doc.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        this.step.set(0);
        this.scheduleNextStep();
      }
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.timeoutId));
  }

  charCount(line: DaffioTerminalLine): number {
    return line.segments.reduce((count, segment) => count + segment.text.length, 0);
  }

  private scheduleNextStep() {
    clearTimeout(this.timeoutId);
    const current = this.step() ?? this.finalStep();
    const atEnd = current >= this.finalStep();
    const delay = atEnd ? this.holdDuration() : this.script()[current].delay;

    this.timeoutId = setTimeout(() => {
      this.step.set(atEnd ? 0 : current + 1);
      this.scheduleNextStep();
    }, delay);
  }
}
