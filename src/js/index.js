'use strict';

const App = require('./app/app');
const NanoCustomEventSupport = require('../../node_modules/nano-widget/lib/nano_custom_event_support');

var onDomReady = function onDomReady() {
  window.Dispatcher = new NanoCustomEventSupport();

  window.app = new App();

  document.querySelector('.app-container').appendChild(app.renderEngine.element);

  app.setup();
  app.run();
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
