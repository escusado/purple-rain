'use strict';

const THREE = require('../../../node_modules/three/build/three.min');
const ThreeEngine = require('../lib/ThreeEngine');
const Sphere = require('./sphere');
const Plane = require('./plane');
const Box = require('./box');
const Field = require('./field');

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

    const lights = this._letThereBeLight();

    this.renderEngine.scene.add(lights);

    this._createElements();

    window.addEventListener('resize', this._resize.bind(this));
  }

  _createElements () {
    this.ground = new Plane();
    this.ground.mesh.position.y = -10;
    this.renderEngine.scene.add(this.ground.mesh);

    this.sphere = new Sphere();
    this.sphere.mesh.position.y = 10;
    this.renderEngine.scene.add(this.sphere.mesh);

    this.box = new Box();
    this.box.mesh.position.y = 20;
    this.renderEngine.scene.add(this.box.mesh);

    this.field = new Field();
    this.field.mesh.position.y = 0;
    this.renderEngine.scene.add(this.field.mesh);
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

  _letThereBeLight () {

    this.renderEngine.renderer.shadowMap.enabled = true;
		this.renderEngine.renderer.shadowMap.type = THREE.PCFShadowMap;

    const lights = new THREE.Object3D();

    // const hemisphere = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 );
    // lights.add( hemisphere );

    // const ambient = new THREE.AmbientLight( 0x444444, 0.5 );
    //lights.add( ambient );

    const spot = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI / 2 );
		spot.position.set( 0, 22, 0 );
		spot.target.position.set( 0, 0, 0 );
		spot.castShadow = true;
		spot.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 1200, 2500 ) );

		spot.shadow.mapSize.width = 2048;
		spot.shadow.mapSize.height = 1024;
		lights.add( spot );

    this.renderEngine.renderer.shadowMap.enabled = true;
		this.renderEngine.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderEngine.renderer.gammaInput = true;
		this.renderEngine.renderer.gammaOutput = true;

    return lights;
  }

};
