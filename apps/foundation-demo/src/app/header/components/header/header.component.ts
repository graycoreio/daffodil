import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidebarVisibility: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  onToggleSidebarVisibility() {
    let that = this;
    // setTimeout included to give the sidebar component time to determine the location of the click first.
    setTimeout(() => {
      that.toggleSidebarVisibility.emit();
    });
  }

  navigateToHomepage() {
    this.router.navigateByUrl('/');
  }
}
