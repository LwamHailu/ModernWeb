import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[lightBlue]'
})
export class LightBlueDirective {

  constructor(element:ElementRef) { 
    element.nativeElement.style.color='lightBlue';
  }
  @HostListener('document:click',['$event'])
  elemClicked(elem){
    console.log('welcome',elem);
   
 }
}
