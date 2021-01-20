import { OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
export declare class CheckboxSetComponent implements OnInit {
    private checkboxSet;
    checkboxArray: FormArray;
    selectedValues: any[];
    ngOnInit(): void;
    displayList(): void;
}
