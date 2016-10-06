var AJEDREZ=new Object();
/////////////DEFINICIÓN DE TORRE////////////////////////////////////
AJEDREZ.TorreGeometry=function()
{
  THREE.Geometry.call(this);
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
  this.merge(BaseMalla.geometry,BaseMalla.matrix);
  this.merge(Base2Malla.geometry,Base2Malla.matrix);
  this.merge(Base3Malla.geometry,Base3Malla.matrix);
  this.merge(TorreMalla.geometry,TorreMalla.matrix);
  this.merge(CoronaMalla.geometry,CoronaMalla.matrix);
  this.merge(Corona1Malla.geometry,Corona1Malla.matrix);
  this.merge(Corona2Malla.geometry,Corona2Malla.matrix);
  this.merge(Corona3Malla.geometry,Corona3Malla.matrix);
}
AJEDREZ.TorreGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DEL TABLERO/////////////////////////////////
AJEDREZ.TableroGeometry=function()
{
  var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
  FTablero.translate(0,0,0);
}
AJEDREZ.TableroGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN LAS CASILLAS////////////////////////////////
AJEDREZ.CasillasGeometryGeometry=function()
{
  var FCasilla=new THREE.BoxGeometry(10,10,0.03,10,10,10);
}
AJEDREZ.TableroGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////




AJEDREZ.setup=function()
{
  AJEDREZ.cargador=new THREE.TextureLoader();  
  
  var Torre1B=new THREE.Mesh(new AJEDREZ.TorreGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("maderaB.jpg")}));
  var Torre2B=new THREE.Mesh(new AJEDREZ.TorreGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("maderaN.jpg")}));
  var Tablero=new THREE.Mesh(new AJEDREZ.TableroGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("marmolA.jpg")}));
  
  Torre1B.position.x=-1;
  Torre2B.position.x=1;
  
  AJEDREZ.camara=new THREE.PerspectiveCamera();
  AJEDREZ.camara.position.z=5;
  
  var lienzo=document.getElementById("ejemplo-prototipo");
  AJEDREZ.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  
  AJEDREZ.renderizador.setSize(600,600);
  
  AJEDREZ.escena=new THREE.Scene();
  AJEDREZ.escena.add(Torre1B);
  AJEDREZ.escena.add(Torre2B); 
  AJEDREZ.escena.add(Tablero); 
}

AJEDREZ.loop=function()
{
  requestAnimationFrame(AJEDREZ.loop);
  AJEDREZ.renderizador.render(AJEDREZ.escena,AJEDREZ.camara);
}


AJEDREZ.setup();
AJEDREZ.loop();
