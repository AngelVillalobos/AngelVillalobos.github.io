/////////////DEFINICIÓN DE OBJETOS Y MALLAS/////////////////////////
var TEXTURATB=new Object();
var TEXTURATN=new Object();
var TEXTURATAB=new Object();
TEXTURATB.malla=new Array();
TEXTURATN.malla=new Array();
var TEXTURACB=new Object();
var TEXTURACN=new Object();
TEXTURACB.malla=new Array();
TEXTURACN.malla=new Array();
var Casillas = new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DE CAMARA Y RENDERIZADOR////////////////////
var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;
TEXTURATB.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
TEXTURATB.camara.position.z=120;
TEXTURATB.camara.position.y=-90;
TEXTURATB.camara.lookAt(new THREE.Vector3(0,0,0));
TEXTURATB.renderizador = new THREE.WebGLRenderer();
TEXTURATB.renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(TEXTURATB.renderizador.domElement);
TEXTURATB.renderizador.shadowMapEnabled=true;
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DE LA LUZ///////////////////////////////////
TEXTURATB.luzPuntual=new THREE.PointLight(0xFFFFFF,1.2);
TEXTURATB.luzPuntual.position.x=150;
TEXTURATB.luzPuntual.position.y=-150;
TEXTURATB.luzPuntual.position.z=150;
TEXTURATB.luzPuntual.castShadow=true;
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DEL TABLERO/////////////////////////////////
var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN LAS CASILLAS////////////////////////////////
var FCasillaB=new THREE.BoxGeometry(10,10,0.03,10,10,10);
var FCasillaG=new THREE.BoxGeometry(10,10,0.03,10,10,10);
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DE TORRE////////////////////////////////////
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
////////////////////////////////////////////////////////////////////

///////////////CREACIÓN DE CASILLAS NEGRAS//////////////////////////
TEXTURACN.retrollamada=function(texturacn)
{
  var a=1;
  var b=0;
  var c=1;
  for (var i=0;i<64; i ++)
  {
    var MCasillaN=new THREE.MeshLambertMaterial({map:texturacn});
    TEXTURACN.malla[i]=new THREE.Mesh(FCasillaG,MCasillaN);
    TEXTURACN.malla[i].receiveShadow=true;
  }
  for (var j=0;j<64; j ++)
  {
    if(j%2==0)
      {
        TEXTURACN.malla[j].position.set((c*10)-45,(b*10)-(35),0.6);
        TEXTURATB.escena.add(TEXTURACN.malla[j]);
        a=a+1;
      }
    if(a==5)
    {
      a=1;
      b=b+1;
      if(b%2==0)
      {
         c=0;
      }
      else
      {
         c=1;
      }  
      j=j+1;
    }
    c=c+1;
  }
}
////////////////////////////////////////////////////////////////////

///////////////CREACIÓN DE CASILLAS BLANCAS/////////////////////////
TEXTURACB.retrollamada=function(texturacb)
{
  var a=1;
  var b=0;
  var c=1;
  for (var i=0;i<64; i ++)
  {
    var MCasillaB=new THREE.MeshLambertMaterial({map:texturacb});
    TEXTURACB.malla[i]=new THREE.Mesh(FCasillaB,MCasillaB);
    TEXTURACB.malla[i].receiveShadow=true;
  }
  for (var j=0;j<64; j ++)
  {
    if(j%2!==0)
      {
        TEXTURACB.malla[j].position.set((c*10)-45,(b*10)-(35),0.6);
        TEXTURATB.escena.add(TEXTURACB.malla[j]);
        a=a+1;
      }
    if(a==5)
    {
      a=1;
      b=b+1;
      if(b%2==0)
      {
         c=1;
      }
      else
      {
         c=0;
      }  
      j=j+1;
    }
    c=c+1;
  }
}
////////////////////////////////////////////////////////////////////

///////////////CREACIÓN DEL TABLERO/////////////////////////////////
TEXTURATAB.retrollamada=function(texturatab)
{
  var MTablero=new THREE.MeshLambertMaterial({map:texturatab});
  TEXTURATAB.Tablero=new THREE.Mesh(FTablero,MTablero);
  TEXTURATAB.Tablero.receiveShadow=true;
  TEXTURATAB.Tablero.position.set(0,0,0);
  TEXTURATB.escena.add(TEXTURATAB.Tablero);
}
////////////////////////////////////////////////////////////////////

///////////////CREACIÓN DE TORRE BLANCA/////////////////////////////
TEXTURATB.retrollamada=function(textura1)
{
  var material1 = new THREE.MeshLambertMaterial({map:textura1});
  for (var i=1;i<3;i++)
  {
    TEXTURATB.malla[i]=new THREE.Mesh(TorrefForma,material1);
    TEXTURATB.malla[i].rotateX(Math.PI/2);
    TEXTURATB.malla[i].castShadow=true;
    TEXTURATB.malla[i].scale.set(7,7,8);
  }
  TEXTURATB.malla[1].position.set(-35,-35,1.2);
  TEXTURATB.escena.add(TEXTURATB.malla[1]);
  TEXTURATB.malla[2].position.set(35,-35,1.2);
  TEXTURATB.escena.add(TEXTURATB.malla[2]);
  TEXTURATB.escena.add(TEXTURATB.luzPuntual);
}
////////////////////////////////////////////////////////////////////

///////////////CREACIÓN DE TORRE NEGRA//////////////////////////////
TEXTURATN.retrollamada=function(textura)
{
  var material2 = new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<3;i++)
  {
    TEXTURATN.malla[i]=new THREE.Mesh(TorrefForma,material2);
    TEXTURATN.malla[i].rotateX(Math.PI/2);
    TEXTURATN.malla[i].castShadow=true;
    TEXTURATN.malla[i].scale.set(7,7,8);
  }
  TEXTURATN.malla[1].position.set(-35,35,1.2);
  TEXTURATB.escena.add(TEXTURATN.malla[1]);
  TEXTURATN.malla[2].position.set(35,35,1.2);
  TEXTURATB.escena.add(TEXTURATN.malla[2]);
  TEXTURATB.escena.add(TEXTURATB.luzPuntual);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO CASILLAS NEGRAS/////////////////////////////
TEXTURACN.setup=function()
{
  TEXTURACN.cargador=new THREE.TextureLoader();
  TEXTURACN.cargador.load("marmolN.jpg",TEXTURACN.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO CASILLAS BLANCAS////////////////////////////
TEXTURACB.setup=function()
{
  TEXTURACB.cargador=new THREE.TextureLoader();
  TEXTURACB.cargador.load("marmolB.jpg",TEXTURACB.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO TABLERO/////////////////////////////////////
TEXTURATAB.setup=function()
{
  TEXTURATAB.cargador=new THREE.TextureLoader();
  TEXTURATAB.cargador.load("marmolA.jpg",TEXTURATAB.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO TORRE BLANCA////////////////////////////////
TEXTURATB.setup=function()
{
  TEXTURATB.escena=new THREE.Scene();
  TEXTURATB.cargador=new THREE.TextureLoader();
  TEXTURATB.cargador.load("maderaB1.jpg",TEXTURATB.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO TORRE NEGRA////////////////////////////////
TEXTURATN.setup=function()
{
  TEXTURATN.cargador=new THREE.TextureLoader();
  TEXTURATN.cargador.load("maderaN.jpg",TEXTURATN.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////////LOOP TORRE BLANCA////////////////////////////////
TEXTURATB.loop=function()
{
  requestAnimationFrame(TEXTURATB.loop);
  for (var i=1;i<3;i++)
  {
    if(TEXTURATB.malla[i]!==undefined)//&&TEXTURATN.malla[i]!==undefined)
    {
      TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);  
    }
  }
}
////////////////////////////////////////////////////////////////////

////////////////////LOOP TORRE NEGRA////////////////////////////////
TEXTURATN.loop=function()
{
  requestAnimationFrame(TEXTURATN.loop);
  for (var i=1;i<3;i++)
  {
    if(TEXTURATN.malla[i]!==undefined)
    {
      TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);
    }
  }
}
////////////////////////////////////////////////////////////////////

////////////////////LOOP TABLERO////////////////////////////////////
TEXTURATAB.loop=function()
{
  requestAnimationFrame(TEXTURATAB.loop);
  if(TEXTURATAB.malla!==undefined)
  {
    TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);
   }
}
////////////////////////////////////////////////////////////////////

////////////////////LOOP CASILLAS BLANCAS///////////////////////////
TEXTURACB.loop=function()
{
  requestAnimationFrame(TEXTURACB.loop);
  if(TEXTURACB.malla!==undefined)
  {
    TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);
   }
}
////////////////////////////////////////////////////////////////////

////////////////////LOOP CASILLAS NEGRAS///////////////////////////
TEXTURACN.loop=function()
{
  requestAnimationFrame(TEXTURACN.loop);
  if(TEXTURACN.malla!==undefined)
  {
    TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);
   }
}
////////////////////////////////////////////////////////////////////

TEXTURATB.setup();
TEXTURATN.setup();
TEXTURATAB.setup();
TEXTURACB.setup();
TEXTURACN.setup();
TEXTURACN.loop();
TEXTURACB.loop();
TEXTURATAB.loop();
TEXTURATB.loop();
TEXTURATN.loop();
