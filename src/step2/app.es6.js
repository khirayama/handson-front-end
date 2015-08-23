import Table from './Table.es6';
import FetchBtn from './FetchBtn.es6';

(() => {
  let $table = document.querySelector('.js-table');
  let $fetchBtn = document.querySelector('.js-fetch-btn');

  new Table($table);
  new FetchBtn($fetchBtn);
})();
