import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DesignLandCodeExample } from '../model/code-example';
import { CodeExampleService } from '../service/code-example.service';

@Component({
  selector: 'design-land-example-viewer-container',
  templateUrl: './example-viewer.component.html',
})
export class DesignLandExampleViewerContainer implements OnInit {
  /**
   * The title of the example
   */
  @Input() title: string;

  /**
   * The lookup name of the example
   */
  @Input() example: string;

  selectedExample$: Observable<DesignLandCodeExample>;

  constructor(private codeExamples: CodeExampleService){}

  ngOnInit(){
	  this.selectedExample$ = this.codeExamples.get(this.example);
  }
}
