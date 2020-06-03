const $result = document.querySelector('#result');

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

export { render };
