var BaseCaballo1=new THREE.BoxGeometry(0.7,0.2,0.7);
var CuerpoCaballo1=new THREE.BoxGeometry(0.5,0.8,0.5);
var CabezaCaballo1=new THREE.BoxGeometry(0.3,0.3,0.4);
BaseCaballo1.translate(0,0,0);
CuerpoCaballo1.translate(0,0.4,0);
CabezaCaballo1.translate(0.3,0.7,0);
var BaseCaballo=new THREE.Mesh(BaseCaballo1);
var CuerpoCaballo=new THREE.Mesh(CuerpoCaballo1);
var CabezaCaballo=new THREE.Mesh(CabezaCaballo1);
var CaballoForma = new THREE.Geometry();
CaballoForma.merge(BaseCaballo.geometry,BaseCaballo.matrix);
CaballoForma.merge(CuerpoCaballo.geometry,CuerpoCaballo.matrix);
CaballoForma.merge(CabezaCaballo.geometry,CabezaCaballo.matrix);
var material=new THREE.MeshNormalMaterial();
var CaballoFinal=new THREE.Mesh(CaballoForma,material);
//PeonFinal.rotateX(Math.PI/12);

var escena = new THREE.Scene();
escena.add(CaballoFinal);

var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
camara.position.y=3;
camara.lookAt(new THREE.Vector3(0,0,0));
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
