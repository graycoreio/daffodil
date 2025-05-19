import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsCodePreviewComponent } from '../component/code-preview.component';
import { DaffDocsCodeExample } from '../model/code-example';
import { DaffDocsCodeExampleService } from '../service/code-example.service';

export const DAFF_DOCS_EXAMPLE_VIEWER_CONTAINER_SELECTOR = 'daff-docs-example-viewer-container';

@Component({
  selector: 'daff-docs-example-viewer-container',
  templateUrl: './example-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffDocsCodePreviewComponent,
    AsyncPipe,
  ],
  providers: [
    DaffDocsCodeExampleService,
  ],
})
export class DaffDocsExampleViewerContainer implements OnInit {
  /**
   * The lookup name of the example
   */
  @Input() example: string;

  /**
   * Whether or not to hide the content of the example viewer.
   */
  @Input() hideContent = false;

  /**
   * The currently selected example.
   */
  selectedExample$: Observable<DaffDocsCodeExample>;

  constructor(
    private codeExamples: DaffDocsCodeExampleService,
  ) {}

  ngOnInit() {
    this.selectedExample$ = this.codeExamples.get(this.example);
  }
}
