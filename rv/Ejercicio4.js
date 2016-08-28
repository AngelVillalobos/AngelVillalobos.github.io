var figura = new THREE.Shape();

figura.moveTo(5.8,0);
figura.lineTo(7.1,4.1);
figura.lineTo(11.6,4.1);
figura.lineTo(7.9,6.7);
figura.lineTo(9.2,10.8);
figura.lineTo(5.8,8.3);
figura.lineTo(2.1,10.8);
figura.lineTo(3.5,6.7);
figura.lineTo(0,4.1);
figura.lineTo(4.4,4.1);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
malla.rotateZ(Math.PI/2);
var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=60;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
