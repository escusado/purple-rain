'use strict';

const THREE = require('../../../node_modules/three/build/three.min');
const Box = require('./box');


const BOX_COUNT = 10;
const BOX_RADIUS = 10;

module.exports = class Plane {
  constructor () {

    this.mesh = new THREE.Object3D();

    this.boxes = [];

		const planeMaterial = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
		const ground = new THREE.Mesh( new THREE.BoxGeometry( 100, 0.01, 100 ), planeMaterial );
		ground.position.set( 0, 0, 0 );
		// ground.rotation.x = - Math.PI / 2;
		ground.scale.set( 10, 10, 10 );
		ground.castShadow = false;
		ground.receiveShadow = true

    this.mesh.add(ground);
    Dispatcher.bind('update', this._handleUpdate.bind(this));

    this._createField();
  }

  _handleUpdate (ev) {
    // console.log('>>>>', ev.data.delta);
    // this.mesh.rotation.x = ev.data.delta/1000;
  }

  _createField () {
    for (let i=0;i<BOX_COUNT;i++) {
      const box = new Box();
      this.mesh.add(box.mesh);
      this.boxes.push(box);
      box.mesh.position.z = Math.random()*10;
      box.mesh.position.x = Math.random()*10;
      console.log('>> box', box);
    }
  }

  _getRandomPositionInsideACircle(){
    // t = 2*pi*random()
    // u = random()+random()
    // r = if u>1 then 2-u else u
    // return [r*cos(t), r*sin(t)]
  }
};
