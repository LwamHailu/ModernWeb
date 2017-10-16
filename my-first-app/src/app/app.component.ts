import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The World';
  visible=true;
  toggleDiv(){
    this.visible=!this.visible;
  }
  recordFile=[
    {name:'alex',age:38,country:'China'},
  {name:'robel',age:8,country:'Eritrea'},
  {name:'yonas',age:28,country:'USA'},

  ]

  
}
