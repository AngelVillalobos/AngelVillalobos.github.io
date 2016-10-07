var AJEDREZ=new Object();
AJEDREZ.TORRES=new Array();

///////////////CONSTRUCTOR LA CAMARA////////////////////////////////
AJEDREZ.CamaraConst=function()
{
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  AJEDREZ.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  AJEDREZ.camara.position.z=120;
  AJEDREZ.camara.position.y=-90;
  AJEDREZ.camara.lookAt(new THREE.Vector3(0,0,0));
}
////////////////////////////////////////////////////////////////////

///////////////CONSTRUCTOR DEL RENDERIZADOR/////////////////////////
/*AJEDREZ.CamaraConst=function()
{
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  AJEDREZ.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  AJEDREZ.camara.position.z=120;
  AJEDREZ.camara.position.y=-90;
  AJEDREZ.camara.lookAt(new THREE.Vector3(0,0,0));
}*/
////////////////////////////////////////////////////////////////////

/////////////CONSTRUCTOR DE TORRE///////////////////////////////////
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

/////////////CONSTRUCTOR DEL TABLERO////////////////////////////////
AJEDREZ.TableroGeometry=function()
{
  THREE.Geometry.call(this);
  var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
  FTablero.translate(0,0,0);
  var MTablero=new THREE.Mesh(FTablero);
  this.merge(MTablero.geometry,MTablero.matrix);
}
AJEDREZ.TableroGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////CONSTRUCTOR LAS CASILLAS///////////////////////////////
AJEDREZ.CasillasGeometryGeometry=function()
{
  var FCasilla=new THREE.BoxGeometry(10,10,0.03,10,10,10);
}
AJEDREZ.TableroGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

///////////////////////CREANDO PIEZAS///////////////////////////////
AJEDREZ.retrollamada=function()
{
  AJEDREZ.cargador=new THREE.TextureLoader(); 
  /////////////////CREANDO LAS TORRES///////////////////////////////
  for (var i=1;i<5;i++)
  {
    /////TORRES BLANCAS////
    if(i>0&&i<3)
    {
      var a=10;
      AJEDREZ.TORRES[i]=new THREE.Mesh(new AJEDREZ.TorreGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("maderaB.jpg")}));
      AJEDREZ.TORRES[i].position.set((1*a)-45,-35,1.2);
      a=a+30;
    }
    ////TORRES NEGRAS////
    else
    {
      var a=10;
      AJEDREZ.TORRES[i]=new THREE.Mesh(new AJEDREZ.TorreGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("maderaN.jpg")}));
      AJEDREZ.TORRES[i].position.set((i*a)-45,35,1.2);
      a=a+30;
    }
    AJEDREZ.TORRES[i].rotateX(Math.PI/2);
    AJEDREZ.TORRES[i].scale.set(7,7,8);
    AJEDREZ.TORRES[i].castShadow=true;
  }
  ////////////////////////////////////////////////////////////////////
  
  ///////////////////CREANDO EL TABLERO///////////////////////////////
  AJEDREZ.TABLERO=new THREE.Mesh(new AJEDREZ.TableroGeometry(),new THREE.MeshBasicMaterial({map:AJEDREZ.cargador.load("marmolA.jpg")}));
  AJEDREZ.TABLERO.position.set(0,0,0);
  ////////////////////////////////////////////////////////////////////
}



AJEDREZ.setup=function()
{
  
  AJEDREZ.retrollamada();
  AJEDREZ.CamaraConst();
  var lienzo=document.getElementById("ejemplo-prototipo");
  AJEDREZ.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  
  AJEDREZ.renderizador.setSize(600,600);
  
  AJEDREZ.escena=new THREE.Scene();
for (var i=1;i<5;i++)
  {
    AJEDREZ.escena.add(AJEDREZ.TORRES[i]); 
  } 
  AJEDREZ.escena.add(AJEDREZ.TABLERO); 
}

AJEDREZ.loop=function()
{
  requestAnimationFrame(AJEDREZ.loop);
  AJEDREZ.renderizador.render(AJEDREZ.escena,AJEDREZ.camara);
}


AJEDREZ.setup();
AJEDREZ.loop();
