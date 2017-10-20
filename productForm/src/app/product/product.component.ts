import { Component, OnInit } from '@angular/core';
import { Product }   from './product';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css']
})

  export class ProductComponent implements OnInit {
 public product:Product;
  public validId:string;
  constructor() { }

  ngOnInit() {
  this.product=new FormGroup({
  productId:new FormControl(),
  productModel:new FormControl(),
  productYear:new FormControl(),
  price:new FormControl(),

})

  }

   add=function(user){
  console.log(user)
   setTimeout(function() {
    if(user.productId!='P123'){
     this.validId=' product id is unique';
     console.log(this.validId);
    
    }
    else
   this.validId=' Product Id is   not Unique';
   console.log(this.validId);
  }, 1000);
  

}

}
 