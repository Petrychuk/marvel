import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import { createRoot } from 'react-dom/client';

import './style/style.scss';

const marvelService = new MarvelService();

// Здесь вы можете обработать результат запроса, например, вывести его в консоль
marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

// Создайте корневой элемент для React 18 перед вызовом ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Теперь вы можете использовать createRoot для рендеринга вашего приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
