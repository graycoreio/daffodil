import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HeaderStick, HeaderUnstick } from '../actions/header.actions';
import { Observable, of } from 'rxjs';
import { DaffPalette } from 'libs/design/src';
import { selectDaffioHeaderColor, selectDaffioHeaderStuck } from '../selectors/header.selector';

@Component({
  selector: 'daffio-header-container',
  templateUrl: './header.component.html'
})
export class DaffioHeaderContainer implements OnInit {

  stuck$: Observable<boolean>;
  color$: Observable<DaffPalette>;

  faBars = faBars;
  
  links: any[] = [
    {path: '/docs/api', title: 'Docs'},
    {path: '/why-pwa', title: 'Why PWA'}
  ];

  intersectionObserver: IntersectionObserver;

  @ViewChild('stickyIndicator', { static: true }) stickyIndicator: ElementRef;
  
  constructor(private store: Store<{}>) {}


  ngOnInit() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(this.updateNavbarColor.bind(this));
      this.intersectionObserver.observe(this.stickyIndicator.nativeElement)
    }

    this.color$ = this.store.pipe(select(selectDaffioHeaderColor));
    this.stuck$ = this.store.pipe(select(selectDaffioHeaderStuck));
  }

  updateNavbarColor(entries: IntersectionObserverEntry[]) : void {
    entries[0].isIntersecting 
      ? this.store.dispatch(new HeaderUnstick)
      : this.store.dispatch(new HeaderStick)
  }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
