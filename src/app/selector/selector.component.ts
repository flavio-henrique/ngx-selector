import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  @Output() selectedChange = new EventEmitter<any>();
  @Input() options: any;
  @Input() label: string;
  @Input() className: string
  @Input()
  get selected() {
    return this.selectedOption;
  }
  set selected(value) {
    this.selectedOption = value;
    this.selectedChange.emit(this.selectedOption);
  }
  selectedOption: any;
  optionsFiltered;;
  showOptions: boolean;
  constructor() { }

  ngOnInit() {
    this.optionsFiltered = this.options;
  }

  setOption(option: any) {
    this.selected = option;
    this.showOptions = false;
  }

  onInputClick(test: any) {
    this.showOptions = true;
  }

  onInputChange(value: any) {
    this.optionsFiltered = this.options.filter((elem) => {
      return elem.name.indexOf(value) !== -1;
    });
  }

  onfocus() {
    this.showOptions = true;
  }

  clearSelector() {
    this.selected = {};
    this.optionsFiltered = this.options;
  }

  onFocusOut(event: any) {

    setTimeout(() => {
      if (!this.optionsFiltered || !this.selected || !this.optionsFiltered.length ) {
        this.clearSelector();
      }
      this.showOptions = false;
    }, 150);
  }

}
