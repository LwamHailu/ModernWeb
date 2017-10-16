
import { Component } from '@angular/core';

 
 
 export class Product{
  CustomerName:string;
  brand:string;
  price:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'product purchased';
   product: Product={
   CustomerName:'Lwam',
   brand:'apple',
   price:1200

   };
  
}
