
var arco = new THREE.Shape();
arco.moveTo(0.06,0.34);
//arco.lineTo(0.09,0.49);
arco.absarc(0,0,0.5,0,Math.PI*(4/9),true);
//arco.lineTo(0.34,0.06);
arco.absarc(0,0,0.35,0,Math.PI*(4/9),true);
//
var forma = new THREE.ShapeGeometry(arco);
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
