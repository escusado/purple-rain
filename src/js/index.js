'use strict';

const App = require('./app/app');

var onDomReady = function onDomReady() {
  window.app = new App();

  app.setup();
  app.run();
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
