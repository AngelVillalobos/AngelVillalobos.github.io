var TEXTURATB=new Object();
var TEXTURATN=new Object();
TEXTURATB.malla=new Array();
TEXTURATN.malla=new Array();



/////////////DEFINICIÓN DE CAMARA Y RENDERIZADOR////////////////////
var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;
TEXTURATB.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
//TEXTURATB.camara.position.z=10;
TEXTURATB.camara.position.y=-5;
TEXTURATB.camara.lookAt(new THREE.Vector3(0,0,0));
TEXTURATB.renderizador = new THREE.WebGLRenderer();
TEXTURATB.renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(TEXTURATB.renderizador.domElement);
TEXTURATB.renderizador.shadowMapEnabled=true;
////////////////////////////////////////////////////////////////////

/////////////DEFINICIÓN DE LA LUZ///////////////////////////////////
TEXTURATB.luzPuntual=new THREE.PointLight(0xFFFFFF);
TEXTURATB.luzPuntual.position.x=150;
TEXTURATB.luzPuntual.position.y=-150;
TEXTURATB.luzPuntual.position.z=150;
TEXTURATB.luzPuntual.castShadow=true;
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

///////////////CREACIÓN DE TORRE BLANCA/////////////////////////////
TEXTURATB.retrollamada=function(textura1)
{
  var material1 = new THREE.MeshLambertMaterial({map:textura1});
  for (var i=1;i<3;i++)
  {
    TEXTURATB.malla[i]=new THREE.Mesh(TorrefForma,material1);
    TEXTURATB.malla[i].rotateX(Math.PI/2);
    TEXTURATB.malla[i].castShadow=true;
  }
  TEXTURATB.malla[1].position.set(-2,-2,0);
  TEXTURATB.escena.add(TEXTURATB.malla[1]);
  TEXTURATB.malla[2].position.set(2,-2,0);
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
  }
  TEXTURATN.malla[1].position.set(-2,2,0);
  TEXTURATB.escena.add(TEXTURATN.malla[1]);
  TEXTURATN.malla[2].position.set(2,2,0);
  TEXTURATB.escena.add(TEXTURATN.malla[2]);
  TEXTURATB.escena.add(TEXTURATB.luzPuntual);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO TORRE BLANCA////////////////////////////////
TEXTURATB.setup=function()
{
  TEXTURATB.escena=new THREE.Scene();
  TEXTURATB.cargador=new THREE.TextureLoader();
  TEXTURATB.cargador.load("maderaB.jpg",TEXTURATB.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////CARGANDO TORRE NEGRA////////////////////////////////
TEXTURATN.setup=function()
{
  //TEXTURATN.escena=new THREE.Scene();
  TEXTURATN.cargador=new THREE.TextureLoader();
  TEXTURATN.cargador.load("maderaN.jpg",TEXTURATN.retrollamada);
}
////////////////////////////////////////////////////////////////////

///////////////////LOOP TORRE BLANCA////////////////////////////////
TEXTURATB.loop=function()
{
  requestAnimationFrame(TEXTURATB.loop);
  //requestAnimationFrame(TEXTURATN.loop);
  for (var i=1;i<3;i++)
  {
    if(TEXTURATB.malla[i]!==undefined)//&&TEXTURATN.malla[i]!==undefined)
    {
      TEXTURATB.renderizador.render(TEXTURATB.escena,TEXTURATB.camara);  
      //TEXTURATB.renderizador.render(TEXTURATN.escena,TEXTURATB.camara);  
      //TEXTURATB.malla[i].rotateY(0.01);
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
      TEXTURATB.renderizador.render(TEXTURATN.escena,TEXTURATB.camara);  
      //TEXTURATB.malla[i].rotateY(0.01);
    }
  }
}











/*
  TEXTURATB.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  //TEXTURATB.camara.position.z=5;
  TEXTURATB.camara.position.y=-5;
  TEXTURATB.camara.lookAt(new THREE.Vector3(0,0,0));
  var lienzo=document.getElementById("ejemplo-textura");
  TEXTURATB.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialiaas:true});
  TEXTURATB.renderizador.setSize(600,600);*/
TEXTURATB.setup();
TEXTURATN.setup();
TEXTURATB.loop();
//TEXTURATN.loop();
