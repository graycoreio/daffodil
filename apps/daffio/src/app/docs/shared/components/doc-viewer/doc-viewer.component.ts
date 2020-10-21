import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { DaffioDoc } from '../../models/doc';

//This is needed because scrolling to a particular element for fragment routing (e.g. package/component#fragment)
//does not go to the correct height by default.
export const FRAGMENT_SCROLL_OFFSET = 45;

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
		private route: ActivatedRoute
	) {}
	
	get safeContent(): SafeHtml {
		return this.dm.bypassSecurityTrustHtml(this.doc.contents);
	}

	ngOnInit() {
		this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
	}

  ngAfterViewInit() {
		//scroll to the fragment in the routing url if it exists.
		const fragmentElement = document.querySelector('#' + this.fragment);
		if(fragmentElement) window.scrollTo({top: fragmentElement.getBoundingClientRect().top-FRAGMENT_SCROLL_OFFSET, behavior: 'smooth'});
	}
}
