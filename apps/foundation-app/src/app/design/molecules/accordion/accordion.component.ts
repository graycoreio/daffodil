import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { letProto } from 'rxjs/operator/let';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements AfterViewInit {

  @Input() title;
  @Input() id;

  accordionElement: HTMLElement;

  constructor() { }

  ngAfterViewInit() {
    this.accordionElement = document.getElementById(this.accordionId);
    let panel = <HTMLElement> this.accordionElement.nextElementSibling;
    
    this.accordionElement.addEventListener("click", function() {
        if (panel.style.paddingBottom){
          panel.style.paddingBottom = '';
          this.classList.remove('active');
        } else {
          panel.style.paddingBottom = panel.scrollHeight + 15 + "px";
          this.classList.add('active');
        }
    });
  }

  get isAccordionOpen() {
    if(this.accordionElement) {
      return this.accordionElement.classList.contains('active');
    }

    return false;
  }

  get accordionId() {
    return "accordion-" + this.id + "-" + this.title;
  }
}
