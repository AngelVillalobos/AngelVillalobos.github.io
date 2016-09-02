
var arco1 = new THREE.Shape();
var arco2 = new THREE.Shape();
var arco3 = new THREE.Shape();
var arco4 = new THREE.Shape();

arco1.absarc(0,0,0.5,Math.PI/18,Math.PI*(4/9),false);
arco1.absarc(0,0,0.35,Math.PI*(4/9),Math.PI/18,true);

var forma = new THREE.ShapeGeometry(arco1);
var malla = new THREE.Mesh(forma);
//malla.rotateZ(Math.PI/4);
var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

