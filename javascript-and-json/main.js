var books = [
  {
    title: 'This is Book One',
    author: 'Not Christina',
    isbn: 123456789
  },
  {
    title: 'This is Book Two',
    author: 'Maybe Christina',
    isbn: 987654321
  },
  {
    title: 'This is Book Three',
    author: 'By Christina',
    isbn: 123123123
  }
];

console.log('books array:', books);
console.log('typeOf value for books:', typeof books);

var booksJSON = JSON.stringify(books);
console.log('JSON of books:', booksJSON);
console.log('typeOf value for JSON books:', typeof booksJSON);

var student = '{"id":321321,"name":"Arms Spaghetti"}';
console.log('student value:', student);
console.group('typeOf value for student:', typeof student);

var studentParse = JSON.parse(student);
console.log('typeOf value for studentParse:', typeof studentParse);
