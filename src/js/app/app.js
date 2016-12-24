'use strict';

const ThreeEngine = require('../lib/ThreeEngine');

module.exports = class App {
  constructor () {
    console.log('App init');

    //get the engine API
    this.renderEngine = new ThreeEngine({
      debugAxis : true
    });
  }

  setup () {
    console.log('App setup');
  }

  run () {
    console.log('App run');
  }
};
