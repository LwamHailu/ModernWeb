 
 enum myConstants{
      pi=3.14,

 }

function areaOfSquare(side1:number,isTicked?:boolean,side2:number=side1):number{
     if(isTicked){
         return Math.floor(side1*side2);
     }
     else
   return side1*side2;
 }

 function circumferenceOfCircle(radius:number):number{
     return 2*radius*myConstants.pi;


 }

  console.log(circumferenceOfCircle(3)+"\n"+areaOfSquare(5.5,true));
 