'use strict';

const THREE = require('../../../node_modules/three/build/three.min');

module.exports = class Plane {
  constructor () {

    const geometry = new THREE.PlaneBufferGeometry( 256, 256 );
		const planeMaterial = new THREE.MeshPhongMaterial( { color: 0xFF0000 } );
		const ground = new THREE.Mesh( geometry, planeMaterial );
		ground.position.set( 0, 0, 0 );
		ground.rotation.x = - Math.PI / 2;
		ground.scale.set( 100, 100, 100 );
		ground.castShadow = false;
		ground.receiveShadow = true;

    this.mesh = ground;
  }

};
