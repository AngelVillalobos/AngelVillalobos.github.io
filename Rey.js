var BaseRey1=new THREE.BoxGeometry(0.7,0.2,0.7);
var CuerpoRey1=new THREE.BoxGeometry(0.5,1.3,0.5);
var CoronaRey1=new THREE.BoxGeometry(0.3,0.3,0.3);
BaseRey1.translate(0,0,0);
CuerpoRey1.translate(0,0.5,0);
CoronaRey1.translate(0,1.3,0);
CoronaRey1.rotateY(Math.PI/4);
var BaseRey=new THREE.Mesh(BaseRey1);
var CuerpoRey=new THREE.Mesh(CuerpoRey1);
var CoronaRey=new THREE.Mesh(CoronaRey1);
var ReyForma = new THREE.Geometry();
ReyForma.merge(BaseRey.geometry,BaseRey.matrix);
ReyForma.merge(CuerpoRey.geometry,CuerpoRey.matrix);
ReyForma.merge(CoronaRey.geometry,CoronaRey.matrix);
var material=new THREE.MeshNormalMaterial();
var ReyFinal=new THREE.Mesh(ReyForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(ReyFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
camara.position.y=3;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
