
export class  LikeComponent {
    // likesCount:number;
    // active:boolean;
 constructor(private likesCount:number,private active:boolean){
    
 }
  onClick(active:boolean):number{
     if(active){
         return --this.likesCount;
     }
   else 
    return ++this.likesCount;
 }
}