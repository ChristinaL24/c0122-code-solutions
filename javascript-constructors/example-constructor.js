function ExampleConstructor() {
}

var test = new ExampleConstructor();

console.log('typeof test:', typeof test);
console.log('value of test', test);

console.log('typeof test.__proto__', typeof test.__proto__);
console.log('value of test.__proto__', test.__proto__);

console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);

console.log('instanceof ExampleConstructor', test instanceof ExampleConstructor);
