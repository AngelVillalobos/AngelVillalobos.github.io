function Pieza()
{
  THREE.Object3D.call(this);
  this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.brazoizq=new THREE.Mesh(new THREE.BoxGeometry(5,1,1));
  this.brazoder=new THREE.Mesh(new THREE.BoxGeometry(5,1,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.brazoizq,this.brazoder,this.piernaizq,this.piernader,cuerpo);
  this.piernaizq.position.z=2.5;
  this.piernaizq.position.y=-5;
  this.piernaizq.position.x=-1.8;
  this.piernader.position.x=1.8;
  this.piernader.position.z=2.5;
  this.piernader.position.y=-5;
  
  this.brazoizq.position.z=6;
  this.brazoizq.position.y=5;
  this.brazoizq.position.x=-1.8;
  this.brazoder.position.x=1.8;
  this.brazoder.position.z=6;
  this.brazoder.position.y=5;
  cuerpo.position.z=2.5;
}
Pieza.prototype=new THREE.Object3D;
var pieza,escena,camara,renderizador;
function setup()
{
  pieza=new Pieza();
  pieza.rotateY(0.2);
  pieza.piernaizq.rotateX(-Math.PI/6);
  escena = new THREE.Scene();
  escena.add(pieza);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=50;
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
}

var a=0;
var b=0;

function loop()
{
  requestAnimationFrame(loop);
  a=a+1;
  //pieza.rotateY(0.1);
  pieza.piernaizq.rotateX(0.01*b);
  pieza.piernader.rotateX(-0.01*b);
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



setup();
loop();




