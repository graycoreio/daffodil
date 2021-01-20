import { EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class DaffImageComponent implements OnInit {
    private sanitizer;
    private _src;
    src: string;
    private _alt;
    alt: string;
    private _width;
    width: number;
    private _height;
    height: number;
    load: EventEmitter<void>;
    /**
     * @docs-private
     */
    ngOnInit(): void;
    constructor(sanitizer: DomSanitizer);
    /**
     * @docs-private
     */
    readonly paddingTop: any;
    /**
     * @docs-private
     */
    readonly maxWidth: string;
}
