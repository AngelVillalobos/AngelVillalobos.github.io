
var arco = new THREE.Shape();
arco.moveTo(0,0);
arco.lineTo(0,0.2);
arco.absarc(0,0,0.5,0,Math.PI/2,false);

var forma = new THREE.ShapeGeometry(arco);
var malla = new THREE.Mesh(forma);
//malla.rotateZ(Math.PI/4);
var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=38;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
