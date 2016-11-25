function Pieza()
{
  THREE.Object3D.call(this);
  this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaizq,this.piernader,cuerpo);
  this.piernaizq.position.z=2.5;
  this.piernaizq.position.y=-5;
  this.piernaizq.position.x=-3;
  this.piernader.position.x=3;
  this.piernader.position.z=2.5;
  this.piernader.position.y=-5;
  cuerpo.position.z=2.5;
}
Pieza.prototype=new THREE.Object3D;
var pieza,escena,camara,renderizador;
function setup()
{
  pieza=new Pieza();
  pieza.rotateY(0.2);
  escena = new THREE.Scene();
  escena.add(pieza);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=50;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
}
function loop()
{
  a=a+1;
  //pieza.rotateY(0.1);
  pieza.piernaIzq.rotateZ(0.01*b);
  if (a>=100)
  {
    b=-1;
    if(a>=200)
    {
      a=0;
    }
  }
  else
  {
    b=1;
  }

  renderizador.render(escena, camara);
}

var a=0;
var b=0;

setup();
loop();


function loop(){
  requestAnimationFrame(loop);
 
}

setup();
loop();

