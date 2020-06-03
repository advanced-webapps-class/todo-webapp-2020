import { render } from './html-render';
import inputForm from './input-form';

import './todos.css';

const todos = [];
const $result = document.querySelector('#result');

$result.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  }
});

inputForm.init(todos);
render(todos);
