var BaseForma = new THREE.CylinderGeometry(0.6,0.6,0.2,64,64);
var TorreForma = new THREE.CylinderGeometry(0.3,0.4,1,64,64);
var CoronaForma = new THREE.CylinderGeometry(0.5,0.5,0.2,64,64);
var Base2Forma = new THREE.TorusGeometry(0.4,0.1,30,200);
var Base3Forma = new THREE.TorusGeometry(0.3,0.1,30,200);
var Corona1Forma = new THREE.RingGeometry(1,2,30,30,0,0.78);

CoronaForma.translate(0,1.2,0);
TorreForma.translate(0,0.6,0);
Base2Forma.translate(0,0,-0.1);
Base3Forma.translate(0,0,-1.1);
Corona1Forma.translate(0,0.6,0);

Base3Forma.rotateX(Math.PI/2);
Base2Forma.rotateX(Math.PI/2);
//Corona1Forma.rotateX(Math.PI/2);
//
//var Corona1FormaE = new THREE.ExtrudeGeometry(Corona1Forma,{amount:10});

var BaseMalla = new THREE.Mesh(BaseForma);
var TorreMalla = new THREE.Mesh(TorreForma);
var CoronaMalla = new THREE.Mesh(CoronaForma);
var Base2Malla = new THREE.Mesh(Base2Forma);
var Base3Malla = new THREE.Mesh(Base3Forma);
var Corona1Malla = new THREE.Mesh(Corona1Forma);

var TorrefForma = new THREE.Geometry();

TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
TorrefForma.merge(CoronaMalla.geometry,CoronaMalla.matrix);
TorrefForma.merge(Base2Malla.geometry,Base2Malla.matrix);
TorrefForma.merge(Base3Malla.geometry,Base3Malla.matrix);
TorrefForma.merge(Corona1Malla.geometry,Corona1Malla.matrix);

TorrefForma.translate(0,-0.6,0);

var material = new THREE.MeshNormalMaterial();
var TorrefMalla = new THREE.Mesh(TorrefForma,material);

var escena = new THREE.Scene();
escena.add(TorrefMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=15;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

