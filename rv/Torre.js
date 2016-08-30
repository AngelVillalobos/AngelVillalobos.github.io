var BaseForma = new THREE.CylinderGeometry(0.6,0.6,0.2);
var TorreForma = new THREE.CylinderGeometry(0.3,0.4,1);
var CoronaForma = new THREE.CylinderGeometry(0.5,0.5,0.4);

CoronaForma.translate(0,1.3,0);
TorreForma.translate(0,0.6,0);

var BaseMalla = new THREE.Mesh(BaseForma);
var TorreMalla = new THREE.Mesh(TorreForma);
var CoronaMalla = new THREE.Mesh(CoronaForma);

var TorrefForma = new THREE.Geometry();

TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
TorrefForma.merge(CoronaMalla.geometry,CoronaMalla.matrix);

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
