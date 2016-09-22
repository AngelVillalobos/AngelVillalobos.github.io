/*
-En JS las funciones son objetos de primer orden
-En JS, al descender semánticamente de Lisp, maneja las funciones como valores
Ejemplo 1
function init(p)
{
  var malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  camara.position.z=5*p;
}
var main=function(p)
{
  renderizador.render(escena,camara);
}
var escena,camara,renderizador;
init(1);
main(2);
Ejemplo2
function init(p)
{
  var malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  camara.position.z=5*p;
}
var main=function(p)
{
  p(1);
  renderizador.render(escena,camara);
}
var escena,camara,renderizador;

main(init);
Ejemplo3*/
function init(p)
{
  malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild(renderizador.domElement);
  camara.position.z=5*p;
}
var loop=function()
{
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  malla.rotateY(0.01);
  malla.position.x(0.01)
  if (malla.position.x==4)
  {
    malla.translate.x(-0.01)
  }
  if (malla.position.x==-4)
  {
    malla.translate.x(0.01)
  }
}
var escena,camara,renderizador,malla;
init(1);
loop();

