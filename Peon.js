var BasePeon1=new THREE.BoxGeometry(0.7,0.2,0.7,10,10,10);
var CuerpoPeon1=new THREE.BoxGeometry(0.5,0.8,0.5,10,10,10);
BasePeon1.translate(0,0,0);
CuerpoPeon1.translate(0,0,-1);
var BasePeon=new THREE.Mesh(BasePeon1);
var CuerpoPeon=new THREE.Mesh(CuerpoPeon1);
var PeonForma = new THREE.Geometry();
PeonForma.merge(BasePeon.geometry,BasePeon.matrix);
//PeonForma.merge(CuerpoPeon.geometry,CuerpoPeon.matrix);
var material=new THREE.MeshNormalMaterial();
var PeonFinal=new THREE.Mesh(PeonForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(PeonFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=4;
camara.position.y=4;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

