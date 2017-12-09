import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  selected: any;
  options: any = [
    { id: 1, name: 'teste' },
    { id: 1, name: 'teste2' },
    { id: 1, name: 'asd' },
    { id: 1, name: 'asdasd' },
    { id: 1, name: 'asd' },
    { id: 1, name: 'werw' },
    { id: 1, name: '234234' },
    { id: 1, name: 'asdasd' },
    { id: 1, name: 'asd' },
    { id: 1, name: 'werw' },
    { id: 1, name: '234234' },
    { id: 1, name: 'asdasd' },
    { id: 1, name: 'asd' },
    { id: 1, name: 'werw' },
    { id: 1, name: '234234' }
  ];
  optionsFiltered = this.options;
  showOptions: boolean;
  constructor() { }

  ngOnInit() {
  }

  setOption(option: any) {
    this.selected = option.name;
    this.showOptions = false;
    console.log(option);
  }

  onInputClick(test:any){
    this.showOptions = true;
    console.log(test);
  }

  onInputChange(value:any){
    this.optionsFiltered = this.options.filter((elem)=> {
      console.log(elem.name.indexOf(value));
      return elem.name.indexOf(value) !== -1;
    });
  }

  onfocus(){
    this.showOptions = true;
  }

  onFocusOut(event:any){
    //setTimeout(() => { this.showOptions = false; }, 150);
  }

}
