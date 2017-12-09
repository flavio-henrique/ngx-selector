import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: any = { };
  options = [
    { id: 1, name: 'First value' },
    { id: 2, name: 'Second value' },
    { id: 3, name: 'Another one' },
    { id: 4, name: 'Fourth value' },
    { id: 5, name: 'my value' },
    { id: 42, name: 'Best value' },
    { id: 4, name: 'Fourth value' },
    { id: 5, name: 'my value' },
    { id: 42, name: 'Best value' }
  ]
  title = 'app works!';

  onSelected(option: any){
    this.selected = option;
  }
}
