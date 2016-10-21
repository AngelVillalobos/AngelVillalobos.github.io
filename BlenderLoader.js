var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z=4;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
var MODELO=new THREE.JSONLoader();
MODELO.load("Rey.js",funcion1);
function funcion1(geometry,materials)
{
  var BaseAlMalla = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.15,64,64),new THREE.MeshNormalMaterial());
  material=new THREE.MeshBasicMaterial();
  Modelo=new THREE.Mesh(geometry,material);
  escena.add(BaseAlMalla);
  escena.add(Modelo);
  Modelo.scale.set(15,15,15);
  Modelo.position.set(0,0,0);
}
funcion1();

