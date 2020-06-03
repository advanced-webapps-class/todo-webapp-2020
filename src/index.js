import './todos.css';

const $todoForm = document.querySelector('#todo-form');
const $input = document.querySelector('#input');

$todoForm.addEventListener('submit', (event) => {
  console.log($input.value);
  event.preventDefault();
});
