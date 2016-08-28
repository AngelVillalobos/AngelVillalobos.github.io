var figura = new THREE.Shape();

figura.moveTo(58,0);
figura.lineTo(71,41);
figura.lineTo(116,41);
figura.lineTo(79,67);
figura.lineTo(92,108);
figura.lineTo(58,83);
figura.lineTo(21,108);
figura.lineTo(35,67);
figura.lineTo(0,41);
figura.lineTo(44,41);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
var escena = new THREE.Scene();
escena.add(malla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
