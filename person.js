var person = /** @class */ (function () {
    function person(firstName, salary, id) {
        this.bonus = 50;
        this.firstName = firstName;
        this.salary = salary;
        this.id = id;
    }
    Object.defineProperty(person.prototype, "personSalary", {
        get: function () {
            if (this.id == 1) {
                return Math.floor(this.bonus * this.salary);
            }
            else
                return this.bonus * this.salary;
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
var person1 = new person('Lwam', 2300.6, 1);
console.log("This month's salary is:" + person1.personSalary());
