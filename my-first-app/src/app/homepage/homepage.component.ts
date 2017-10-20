import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private price:PriceService) {
    
   }

  ngOnInit() {
    
    console.log(this.price.disp());
  }
 
}
