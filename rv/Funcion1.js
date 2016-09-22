/*
-En JS las funciones son objetos de primer orden
-En JS, al descender semánticamente de Lisp, maneja las funciones como valores
*/
function init(p)
{
  var malla(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  var renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  renderizador.render(escena,camara);
}

var main=function init(p)
{
  renderizador.render(escena,camara);
}
