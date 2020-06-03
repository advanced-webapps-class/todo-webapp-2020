import { render } from './html-render';

import './todos.css';

const $todoForm = document.querySelector('#todo-form');
const $input = document.querySelector('#input');

const todos = [
  {
    id: 1,
    text: 'js공부',
  },
];
const todoModel = {
  id: '',
  text: '',
};

$todoForm.addEventListener('submit', (event) => {
  console.log($input.value);
  event.preventDefault();
});

render(todos);
