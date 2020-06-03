import { render } from './html-render';

import './todos.css';

const $todoForm = document.querySelector('#todo-form');
const $input = document.querySelector('#input');

const todos = [];
const todoModel = {
  id: '',
  text: '',
};

$todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  todos.push({
    ...todoModel,
    text: $input.value,
  });

  $input.value = '';
  render(todos);
});

render(todos);
