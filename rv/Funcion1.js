/*
-En JS las funciones son objetos de primer orden
-En JS, al descender semánticamente de Lisp, maneja las funciones como valores
*/
function init()
{
  var malla(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  var renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  renderizador.render(escena,camara);
}

var main=function()
{
  renderizador.render(escena,camara);
}
