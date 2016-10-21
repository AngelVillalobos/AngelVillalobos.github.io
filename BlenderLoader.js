var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z=4;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
var MODELO=new THREE.JSONLoader();
MODELO.load("Rey1.js",funcion1);
function funcion1(geometry,materials)
{
  material=new THREE.MeshBasicMaterial();
  Modelo=new THREE.Mesh(geometry,material);
  escena.add(Modelo);
}

funcion1();
