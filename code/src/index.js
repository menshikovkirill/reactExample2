import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppIndex from './components/AppIndex.jsx';

function createData(index, userId, query, tips, documents, date, duration, comments) {
  return { index, userId, query, tips, documents, date, duration, duration, comments };
}

const rows = [
  createData(0, 1, "", [], 1, '30.06.2020 18:54:34','0:21:49', 'Необходимо просмотреть'), 
  createData(1, 2,"", ['закон о защите прав потребителей', 'договорная неустойка', 'законная и договорная неустойка'], 0, '30.06.2020 18:54:34','0:21:49', 'Не забыть обработать запрос'), 
  createData(2, 4,"Запрос", ['розничная торговля через интернет', 'правила розничной торговли'], 1, '19.06.2020 10:54:34','1:34:49', ''), 
  createData(3, 1,"", ['сазм-инструкция по заполнению', 'форма савм-стаж', 'образцы заполнения трудового договора'], 0, '30.06.2020 18:54:34','0:21:49', 'Необходимо просмотреть и проанализировать работу'), 
  createData(4, 1,"", ['изменение обязательных условий трудового договора'], 0, '30.06.2020 18:54:34','0:21:49', 'Необходимо просмотреть'), 
  createData(5, 1,"", ['односторонний отказ от исполнения договора аренды'], 0, '30.06.2020 18:54:34','0:21:49', 'Необходимо просмотреть'), 
  
];



ReactDOM.render(
	
  <AppIndex dataRows = {rows}/>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
