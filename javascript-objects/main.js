var student = {
  firstName: 'Christina',
  lastName: 'Le',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;

console.log('value of student.livesInIrvine:s', student.livesInIrvine);

student.previousOccupation = 'server';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log(student);

var vehicle = {
  make: 'toyota',
  model: 'corolla',
  year: 2012
};

vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);

vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Teddy',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
