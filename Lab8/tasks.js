let someObject1 = {};
someObject1.someProperty = "property";
console.log(someObject1.someProperty);

let someObject2 = {
    someProperty: "property"
}
console.log(someObject2.someProperty);
someObject2["someProperty"] = "new value of property";
console.log(someObject2.someProperty);

function SomeObject(value) {
    this.someProperty = value;
}

SomeObject.prototype.toString = function() {
    return `Hippity-hoppity get of my ${this.someProperty}`;
}

someObject3 = new SomeObject("property");
console.log(String(someObject3));

Array.prototype.sumAbs = function () {
    return this.reduce((result, x) => result + Math.abs(x));
}

console.log([1, 2, -3, 4, 5, -10].sumAbs());