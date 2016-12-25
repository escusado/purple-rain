'use strict';

const THREE = require('../../../node_modules/three/build/three.min');
const ThreeEngine = require('../lib/ThreeEngine');

module.exports = class App {
  constructor () {
    console.log('App init');

    this.renderEngine = new ThreeEngine({
      debugAxis : true
    });

  }

  setup () {
    console.log('App setup');
    this.renderEngine.setup();
    this.renderEngine.camera.lookAt(0, 0, 0);
    this.renderEngine.scene.add(new THREE.AmbientLight(0xFFFFFF));

    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
    this.cube = new THREE.Mesh(geometry, material);
    this.renderEngine.scene.add(this.cube);

    window.addEventListener('resize', this._resize.bind(this));
  }

  run () {
    console.log('App run');
    this.renderEngine.update();
  }

  _resize () {
    var newSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };

    this.renderEngine.resize(newSize);
    this.size = newSize;
  }
};
