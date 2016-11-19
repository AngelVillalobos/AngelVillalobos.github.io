var BaseTorre1=new THREE.BoxGeometry(0.7,0.2,0.7);
var CuerpoTorre1=new THREE.BoxGeometry(0.6,1.2,0.6);
BaseTorre1.translate(0,0,0);
CuerpoTorre1.translate(0,0.7,0);
var BaseTorre=new THREE.Mesh(BaseTorre1);
var CuerpoTorre=new THREE.Mesh(CuerpoTorre1);
var TorreForma = new THREE.Geometry();
TorreForma.merge(BaseTorre.geometry,BaseTorre.matrix);
TorreForma.merge(CuerpoTorre.geometry,CuerpoTorre.matrix);
var material=new THREE.MeshNormalMaterial();
var TorreFinal=new THREE.Mesh(TorreForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(TorreFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
camara.position.y=3;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
