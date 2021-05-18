import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { DaffioDoc } from '../../models/doc';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocViewerComponent implements OnInit, AfterViewInit {

	private fragment: string;
	/**
	 * The doc to render
	 */
	@Input() doc: DaffioDoc;

	constructor(
		private dm: DomSanitizer,
		private route: ActivatedRoute,
	) {}

	get safeContent(): SafeHtml {
	  return this.dm.bypassSecurityTrustHtml(this.doc.contents);
	}

	ngOnInit() {
	  this.route.fragment.subscribe(fragment => {
	    this.fragment = fragment;
	  });
	}

	ngAfterViewInit() {
	  //scroll to the fragment in the routing url if it exists.
	  //The fragmentElement isn't in the correct spot until after an extra lifecycle, which is
	  //why there is a setTimeout.
	  setTimeout(() => {
	    const fragmentElement = document.querySelector('#' + this.fragment);
	    if(fragmentElement) {
	      window.scrollTo({ top: fragmentElement.getBoundingClientRect().top, behavior: 'smooth' });
	    }
	  });
	}
}
