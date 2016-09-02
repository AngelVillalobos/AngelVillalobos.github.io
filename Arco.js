var arco = new THREE.EllipseCurve(0,0,3,3,0,Math.PI/4,false);

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
