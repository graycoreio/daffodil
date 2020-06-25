import { NgModule, ComponentFactoryResolver, Injector } from '@angular/core';
import { DaffCheckboxModule, DaffButtonModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from './checkbox.component';
import { DesignLandCheckboxRoutingModule } from './checkbox-routing.module';
import { CHECKBOX_EXAMPLES } from '@daffodil/design/checkbox/examples';
import { createCustomElement, NgElementConstructor } from '@angular/elements';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';



export interface CustomClassElement<T> {
    element: NgElementConstructor<T>,
    class: T
}

@NgModule({

    declarations: [
        CheckboxComponent,
        ...CHECKBOX_EXAMPLES
    ],
    imports: [
        DesignLandExampleViewerModule,
        DesignLandCheckboxRoutingModule,
        DaffCheckboxModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    entryComponents: [
        ...CHECKBOX_EXAMPLES
    ]
})
export class CheckboxModule {
    constructor(
        injector: Injector,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        CHECKBOX_EXAMPLES
            .map((classConstructor) => {
                return {
                    element: createCustomElement(classConstructor, { injector }),
                    class: classConstructor
                }
            })
            .map((customElement) => {
                // Register the custom element with the browser.
                customElements.define(
                    this.componentFactoryResolver.resolveComponentFactory<unknown>(customElement.class).selector + '-example',
                    customElement.element
                );
            });
    }
}