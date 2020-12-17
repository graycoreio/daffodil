import { Component, OnInit, ComponentFactoryResolver, Input, Type, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { DaffImageComponent } from 'libs/design/src/atoms/image/image.component';

@Component({
  selector: 'daff-media-renderer',
  templateUrl: './media-renderer.component.html',
  styleUrls: ['./media-renderer.component.scss']
})
export class DaffMediaRendererComponent implements AfterViewInit {
  @Input() component: Type<unknown>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  @ViewChild(TemplateRef, {static: true, read: ViewContainerRef}) slot: ViewContainerRef;

  ngAfterViewInit() {
    console.log(this.slot)
    if(this.component) {
      let component = this.componentFactoryResolver.resolveComponentFactory(this.component.constructor as any);
      // component.maxWidth = this.component.maxWidth;
      console.log(component)

      const componentRef = this.slot.createComponent(component);
      component.inputs.forEach((input) => {
        componentRef.instance[input.propName] = this.component[input.propName];
      })
    }
  }
}
