class person{
    firstName:String;
    salary:number;
    bonus:number=50;
    id:number;

constructor(firstName:String,salary:number,id?:number){
    this.firstName=firstName;
    this.salary=salary;
    this.id=id;

}
 get personSalary():number{
     if(this.id==1){
     return Math.floor(this.bonus*this.salary);
    }
    else
      return this.bonus*this.salary;
 }

}
var person1=new person('Lwam',2300.6,1);
console.log("This month's salary is:"+person1.personSalary);