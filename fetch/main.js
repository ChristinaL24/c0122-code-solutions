fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
  });

fetch('https://pokeapi.co/api/v2/pokemon/24', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
  });
