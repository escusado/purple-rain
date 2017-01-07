'use strict';

const THREE = require('../../../node_modules/three/build/three.min');

module.exports = class Sphere {
  constructor () {

    // const material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
    const material = new THREE.MeshPhongMaterial({
      color: 0x00FFFF
    });
    this.mesh = new THREE.Mesh(this._getRandomGeometry(), material);

    this.mesh.castShadow = true;
		// this.mesh.receiveShadow = true;
  }

  _getRandomGeometry () {
    // geometry
    var geometry = new THREE.Geometry();

    // vertices
    geometry.vertices = [
        new THREE.Vector3( 2.04772293123743050, -4.09327412386437040, -5.74908146957292670),
        new THREE.Vector3(  7.02732984841516030, 1.40331541320251810, -1.62706516545639390),
        new THREE.Vector3( 4.22549114271519950, -1.62031854283173550,  5.78962800381778210),
        new THREE.Vector3( 0.75411577446253997,  7.11690807989861880, -1.66761169970125600),
        new THREE.Vector3(-0.75411577446252998, -7.11690807989862510,  1.66761169970125020),
        new THREE.Vector3(-4.22549114271518980,  1.62031854283173260, -5.78962800381778920),
        new THREE.Vector3( -2.0477229312374288,  4.09327412386436950,  5.74908146957292670),
        new THREE.Vector3(-7.02732984841515230, -1.40331541320252740,  1.62706516545639970),
        new THREE.Vector3( 6.27321407395262300, -5.71359266669610030,  0.04054653424485652),
        new THREE.Vector3( 2.80183870569996340,  3.02363395603425690, -7.41669316927418000),
        new THREE.Vector3( 4.97960691717773150,  5.49658953706689160,  4.12201630411653590),
        new THREE.Vector3(-2.80183870569996340, -3.02363395603425690,  7.41669316927418000),
        new THREE.Vector3(-4.97960691717773150, -5.49658953706689160, -4.12201630411653590),
        new THREE.Vector3(-6.27321407395262480,  5.71359266669610210, -0.04054653424485653)
    ];

    // faces - in counterclockwise winding order - important!
    geometry.faces.push(
        new THREE.Face3( 8, 0, 9 ),  new THREE.Face3( 9, 1, 8 ),
        new THREE.Face3( 8, 1, 10 ), new THREE.Face3( 10, 2, 8 ),
        new THREE.Face3( 8, 2, 11 ), new THREE.Face3( 11, 4, 8 ),
        new THREE.Face3( 8, 4, 12 ), new THREE.Face3( 12, 0, 8 ),
        new THREE.Face3( 12, 5, 9 ), new THREE.Face3( 9, 0, 12 ),
        new THREE.Face3( 13, 3, 9 ), new THREE.Face3( 9, 5, 13 ),
        new THREE.Face3( 10, 1, 9 ), new THREE.Face3( 9, 3, 10 ),
        new THREE.Face3( 10, 3, 13 ), new THREE.Face3( 13, 6, 10 ),
        new THREE.Face3( 11, 2, 10 ), new THREE.Face3( 10, 6, 11 ),
        new THREE.Face3( 11, 7, 12 ), new THREE.Face3( 12, 4, 11 ),
        new THREE.Face3( 12, 7, 13 ), new THREE.Face3( 13, 5, 12 ),
        new THREE.Face3( 13, 7, 11 ), new THREE.Face3( 11, 6, 13 )
    );

    return geometry;
  }
};
