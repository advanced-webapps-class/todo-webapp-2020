import { render } from './html-render';
import inputForm from './input-form';

import './todos.css';

const todos = [];
const $result = document.querySelector('#result');

$result.addEventListener('click', (event) => {
  if (event.target.className === 'delete') {
    console.log('delete');
  }
});

inputForm.init(todos);
render(todos);
