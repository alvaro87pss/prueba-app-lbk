/// <amd-dependency path='lll/index'/>

import {element, bootstrap} from 'angular';

element(document).ready(() => {
  let $html = element(document.getElementById('lll'));
  bootstrap($html, ['lll']);
});