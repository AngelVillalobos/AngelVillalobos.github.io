var BaseAlfil1=new THREE.BoxGeometry(0.7,0.2,0.7);
var CuerpoAlfil1=new THREE.ConeGeometry(0.7,1.2,4);
BaseAlfil1.translate(0,0,0);
CuerpoAlfil1.translate(0,0.4,0);
var BaseAlfil=new THREE.Mesh(BaseAlfil1);
var CuerpoAlfil=new THREE.Mesh(CuerpoAlfil1);
var AlfilForma = new THREE.Geometry();
AlfilForma.merge(BaseAlfil.geometry,BaseAlfil.matrix);
AlfilForma.merge(CuerpoAlfil.geometry,CuerpoAlfi.matrix);
var material=new THREE.MeshNormalMaterial();
var AlfilFinal=new THREE.Mesh(AlfilForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(AlfilFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
camara.position.y=3;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
