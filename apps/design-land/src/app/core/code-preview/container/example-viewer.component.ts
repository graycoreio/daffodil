import { Component, OnInit, Input } from '@angular/core';
import { CodeExampleService } from '../service/code-example.service';
import { DesignLandCodeExample } from '../model/code-example';
import { Observable } from 'rxjs';

@Component({
	selector: 'design-land-example-viewer',
	templateUrl: './example-viewer.component.html',
})
export class DesignLandExampleViewer implements OnInit {
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
