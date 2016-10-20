function Pieza()
{
  THREE.Object3D.call(this);
  this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(piernaezq,piernader,cuerpo);
  this.piernaizq.position.z=-2;
  this.piernaizq.position.y=-2.5;
  this.piernader.position.z=2;
  this.piernader.position.y=-2.5;
  cuerpo.position.z=2.5;
}

Pieza.prototype=new THREE.Object3D;
var pieza;
function setup()
{
  pieza=new Pieza();
  var escena = new THREE.Scene();
  escena.add(pieza);
  var camara = new THREE.PerspectiveCamera();
  camara.position.z=3;
  var renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
}

function loop()
{
  requestAnimationFrame(TEXTURA.loop);
  pieza.rotateY=0.1;
  renderizador.render(escena,camara);
}

setup();
loop();




