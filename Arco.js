var arco = new THREE.Shape();

figura.moveTo(5.8,0);
figura.arc100,75,50,0,2*Math.PI);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
malla.rotateZ(Math.PI/4);
var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=38;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
