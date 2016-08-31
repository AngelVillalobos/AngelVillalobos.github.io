var BaseForma = new THREE.CylinderGeometry(0.6,0.6,0.2,64,64);
var TorreForma = new THREE.CylinderGeometry(0.3,0.4,1,64,64);
var CoronaForma = new THREE.CylinderGeometry(0.5,0.5,0.4,64,64);
var Base2Forma = new THREE.TorusGeometry(0.4,0.1,30,200);

CoronaForma.translate(0,1.3,0);
TorreForma.translate(0,0.6,0);
Base2Forma.translate(0,0,-0.1);

Base2Forma.rotateX(Math.PI/2);

var BaseMalla = new THREE.Mesh(BaseForma);
var TorreMalla = new THREE.Mesh(TorreForma);
var CoronaMalla = new THREE.Mesh(CoronaForma);
var Base2Malla = new THREE.Mesh(Base2Forma);

//Base2Malla.rotateY(Math.PI/2);

var TorrefForma = new THREE.Geometry();

TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
TorrefForma.merge(CoronaMalla.geometry,CoronaMalla.matrix);
TorrefForma.merge(Base2Malla.geometry,Base2Malla.matrix);

TorrefForma.rotateX(Math.PI/8);

var material = new THREE.MeshNormalMaterial();
var TorrefMalla = new THREE.Mesh(TorrefForma,material);



var escena = new THREE.Scene();
escena.add(TorrefMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
