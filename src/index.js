import './todos.css';

const $todoForm = document.querySelector('#todo-form');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

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

function getTodosHtml(data) {
  const html = data.map((todo) => {
    return `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked" />
    <span class="text">${todo.text}</span>
  </li>`;
  });

  return `<ul>${html.join('')}</ul>`;
}

function render(data) {
  $result.innerHTML = getTodosHtml(data);
}

render(todos);
