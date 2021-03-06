'use strict';

const THREE = require('../../../node_modules/three/build/three.min');

module.exports = class Field {
  constructor () {

    this.mesh = new THREE.Mesh( new THREE.BoxGeometry( 3, 1, 2 ),
      new THREE.MeshPhongMaterial({
        color: 0x4080ff
      })
    );

    this.mesh.castShadow = true;

    Dispatcher.bind('update', this._handleUpdate.bind(this));
  }

  _handleUpdate (ev) {
    // console.log('>>>>', ev.data.delta);
    this.mesh.rotation.x = ev.data.delta/1000;
  }

};
