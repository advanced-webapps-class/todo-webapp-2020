import { render } from './html-render';
import inputForm from './input-form';

import './todos.css';

const todos = [];

inputForm.init(todos);
render(todos);
