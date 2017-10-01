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

    // this.renderEngine.scene.add(lights);

    this._createElements();

    window.addEventListener('resize', this._resize.bind(this));
  }

  _createElements () {
    this.ground = new Plane();
    this.ground.mesh.position.y = -10;
    this.renderEngine.scene.add(this.ground.mesh);
    //
    // this.sphere = new Sphere();
    // this.sphere.mesh.position.y = 10;
    // this.renderEngine.scene.add(this.sphere.mesh);

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

    // this.renderEngine.renderer.shadowMap.enabled = true;
		// this.renderEngine.renderer.shadowMap.type = THREE.PCFShadowMap;

    // const lights = new THREE.Object3D();
    //
    // // const hemisphere = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 );
    // // lights.add( hemisphere );
    //
    // // const ambient = new THREE.AmbientLight( 0x444444, 0.5 );
    // //lights.add( ambient );
    //
    // // const spot = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI / 2 );
		// // spot.position.set( 0, 22, 0 );
		// // spot.target.position.set( 0, 0, 0 );
		// // spot.castShadow = true;
		// // spot.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 1200, 2500 ) );
    // //
		// // spot.shadow.mapSize.width = 2048;
		// // spot.shadow.mapSize.height = 1024;
    // const hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 );
		// lights.add( hemiLight );


    // A hemisphere light is a gradient colored light;
  	// the first parameter is the sky color, the second parameter is the ground color,
  	// the third parameter is the intensity of the light
  	const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)

  	// A directional light shines from a specific direction.
  	// It acts like the sun, that means that all the rays produced are parallel.
  	const shadowLight = new THREE.DirectionalLight(0xffffff, .9);

  	// Set the direction of the light
  	shadowLight.position.set(150, 350, 350);

  	// Allow shadow casting
  	shadowLight.castShadow = true;

  	// define the visible area of the projected shadow
  	shadowLight.shadow.camera.left = -400;
  	shadowLight.shadow.camera.right = 400;
  	shadowLight.shadow.camera.top = 400;
  	shadowLight.shadow.camera.bottom = -400;
  	shadowLight.shadow.camera.near = 1;
  	shadowLight.shadow.camera.far = 1000;

  	// define the resolution of the shadow; the higher the better,
  	// but also the more expensive and less performant
  	shadowLight.shadow.mapSize.width = 2048;
  	shadowLight.shadow.mapSize.height = 2048;

  	// to activate the lights, just add them to the scene
  	this.renderEngine.scene.add(hemisphereLight);
  	this.renderEngine.scene.add(shadowLight);




    // this.renderEngine.scene.fog = new THREE.Fog(0xaaaaaa, 0.010, 200);
    this.renderEngine.renderer.shadowMap.enabled = true;
		// this.renderEngine.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderEngine.renderer.gammaInput = true;
		this.renderEngine.renderer.gammaOutput = true;

    // return lights;
  }

};
