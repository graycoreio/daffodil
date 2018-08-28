import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleShowSidebar: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  onToggleShowSidebar() {
    let that = this;
    // setTimeout included to give the sidebar component time to determine the location of the click first.
    setTimeout(() => {
      that.toggleShowSidebar.emit();
    });
  }

  navigateToHomepage() {
    this.router.navigateByUrl('/');
  }
}
