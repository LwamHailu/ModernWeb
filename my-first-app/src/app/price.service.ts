import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {
 private price:number=1000;
  constructor() { 
  
}


 disp():boolean{
   if (this.price>900){
     return true;
   }
   return false;
 }
}
