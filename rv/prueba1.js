var TEXTURATB=new Object();
////////////////////////////////////////////////////////////////////
var BaseForma = new THREE.CylinderGeometry(0.6,0.6,0.2,64,64);
var Base2Forma = new THREE.TorusGeometry(0.4,0.1,30,200);
var Base3Forma = new THREE.TorusGeometry(0.3,0.1,30,200);
var TorreForma = new THREE.CylinderGeometry(0.3,0.4,1,64,64);
var CoronaForma = new THREE.CylinderGeometry(0.5,0.5,0.2,64,64);
var Corona1Forma = new THREE.TorusGeometry(0.4,0.1,30,200);
var Corona2Forma = new THREE.SphereGeometry(0.4,32,32,6,6.3,1.5,3);
var Corona3Forma = new THREE.SphereGeometry(0.1,32,32,6,6.3,6,6.3);

CoronaForma.translate(0,1.2,0);
Corona1Forma.translate(0,0,-1.3);
Corona2Forma.translate(0,-1.2,0);
Corona3Forma.translate(0,-1.6,0);
TorreForma.translate(0,0.6,0);
Base2Forma.translate(0,0,-0.1);
Base3Forma.translate(0,0,-1.1);

Corona1Forma.rotateX(Math.PI/2);
Corona2Forma.rotateX(Math.PI);
Corona3Forma.rotateX(Math.PI);
Base3Forma.rotateX(Math.PI/2);
Base2Forma.rotateX(Math.PI/2);

var BaseMalla = new THREE.Mesh(BaseForma);
var Base2Malla = new THREE.Mesh(Base2Forma);
var Base3Malla = new THREE.Mesh(Base3Forma);
var TorreMalla = new THREE.Mesh(TorreForma);
var CoronaMalla = new THREE.Mesh(CoronaForma);
var Corona1Malla = new THREE.Mesh(Corona1Forma);
var Corona2Malla = new THREE.Mesh(Corona2Forma);
var Corona3Malla = new THREE.Mesh(Corona3Forma);


var TorrefForma = new THREE.Geometry();

  TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
  TorrefForma.merge(Base2Malla.geometry,Base2Malla.matrix);
  TorrefForma.merge(Base3Malla.geometry,Base3Malla.matrix);
  TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
  TorrefForma.merge(CoronaMalla.geometry,CoronaMalla.matrix);
  TorrefForma.merge(Corona1Malla.geometry,Corona1Malla.matrix);
  TorrefForma.merge(Corona2Malla.geometry,Corona2Malla.matrix);
  TorrefForma.merge(Corona3Malla.geometry,Corona3Malla.matrix);
/////////////////////////////////////////////////////////////////////





TEXTURATB.retrollamada=function(textura)
{
  var material1 = new THREE.MeshBasicMaterial({map:maderaB});
  TEXTURATB.malla=new THREE.Mesh(TorrefForma,material1);
  TEXTURA.escena.add(TEXTURA.malla);
}



TEXTURA.setup=function()
{
  TEXTURA.escena=new THREE.Scene();
  var cargador=new THREE.TextureLoader();
  cargador.load("maderaB.jpg",TEXTURA.retrollamada);
  TEXTURA.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  TEXTURA.camara.position.z=5;
  var lienzo=document.getElementById("ejemplo-textura");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialiaas:true});
  TEXTURA.renderizador.setSize(600,600);
}
TEXTURA.loop=function()
{
  requestAnimationFrame(TEXTURA.loop);
  if(TEXTURA.malla!==undefined)
  {
    TEXTURA.malla.rotateX(0.01);
    TEXTURA.malla.rotateY(0.01);
  }
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
}

TEXTURA.setup();
TEXTURA.loop();
