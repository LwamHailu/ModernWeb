import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 form;//form class
  ngOnInit(){ 
    this.form=new FormGroup({
  firstName:new FormControl(''),
  lastName:new FormControl(),
  profession:new FormControl(),

  })
}
onSubmit=function(user){
console.log(user);

  
}

}

