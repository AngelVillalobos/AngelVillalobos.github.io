var BaseReina1=new THREE.BoxGeometry(0.7,0.2,0.7);
var CuerpoReina1=new THREE.CylinderGeometry(0.3,0.3,1.3,32);
var CoronaReina1=new THREE.SphereGeometry(0.3,32,32);
BaseReina1.translate(0,0,0);
CuerpoReina1.translate(0,0.5,0);
CoronaReina1.translate(0,1.3,0);
var BaseReina=new THREE.Mesh(BaseReina1);
var CuerpoReina=new THREE.Mesh(CuerpoReina1);
var CoronaReina=new THREE.Mesh(CoronaReina1);
var ReinaForma = new THREE.Geometry();
ReinaForma.merge(BaseReina.geometry,BaseReina.matrix);
ReinaForma.merge(CuerpoReina.geometry,CuerpoReina.matrix);
ReinaForma.merge(CoronaReina.geometry,CoronaReina.matrix);
var material=new THREE.MeshNormalMaterial();
var ReinaFinal=new THREE.Mesh(ReinaForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(ReinaFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
camara.position.y=3;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
