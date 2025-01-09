import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-dropdown',
    imports: [FontAwesomeModule, CommonModule],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.sass',
})
export class DropdownComponent {
    faChevronDown = faChevronDown;
    showOptions = false;
    @Input()
    placeholder: string;

    @Input()
    options: string[];

    @Input()
    value: string;

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter();

    select(val: string) {
        this.valueChange.emit(val);
    }
    constructor() {
        this.placeholder = this.value = '';
        this.options = [];
    }

    toggleOptions() {
        this.showOptions = !this.showOptions;
    }
}
