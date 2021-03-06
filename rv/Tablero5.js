var AJEDREZ=new Object();
AJEDREZ.TorresBlancas=new Array();
AJEDREZ.TorresNegras=new Array();
AJEDREZ.PeonesBlancos=new Array();
AJEDREZ.PeonesNegros=new Array();
AJEDREZ.CasillasNegras=new Array();
AJEDREZ.CasillasBlancas=new Array();
AJEDREZ.AlfilesBlancos=new Array();
AJEDREZ.AlfilesNegros=new Array();

AJEDREZ.CRL=function()
{
  /////CAMARA////
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  AJEDREZ.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  AJEDREZ.camara.position.z=120;
  AJEDREZ.camara.position.y=-90;
  AJEDREZ.camara.lookAt(new THREE.Vector3(0,0,0));
  /////RENDERIZADOR////
  AJEDREZ.renderizador = new THREE.WebGLRenderer();
  AJEDREZ.renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(AJEDREZ.renderizador.domElement);
  AJEDREZ.renderizador.shadowMapEnabled=true;
  /////LUZ////
  AJEDREZ.luzPuntual=new THREE.PointLight(0xFFFFFF,1.2);
  AJEDREZ.luzPuntual.position.x=150;
  AJEDREZ.luzPuntual.position.y=-150;
  AJEDREZ.luzPuntual.position.z=150;
  AJEDREZ.luzPuntual.castShadow=true;
}
////////////////////////////////////////////////////////////////////

/////////////CONSTRUCTOR LAS CASILLAS///////////////////////////////
AJEDREZ.CasillasGeometry=function()
{
  THREE.Geometry.call(this);
  var FCasilla=new THREE.BoxGeometry(10,10,0.03,10,10,10);
  var MCasilla=new THREE.Mesh(FCasilla);
  this.merge(MCasilla.geometry,MCasilla.matrix);
}
AJEDREZ.CasillasGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////CONSTRUCTOR DEL TABLERO////////////////////////////////
AJEDREZ.TableroGeometry=function()
{
  THREE.Geometry.call(this);
  var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
  var MTablero=new THREE.Mesh(FTablero);
  this.merge(MTablero.geometry,MTablero.matrix);
}
AJEDREZ.TableroGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

///////////////CONSTRUCTOR DEL ALFIL////////////////////////////////
AJEDREZ.AlfilGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseAlForma = new THREE.CylinderGeometry(0.5,0.5,0.15,64,64);
  var Base2AlForma = new THREE.TorusGeometry(0.35,0.1,30,200);
  var Base3AlForma = new THREE.TorusGeometry(0.2,0.07,30,200);
  var AlfilForma = new THREE.CylinderGeometry(0.2,0.4,1.2,64,64);
  var Corona3AlForma = new THREE.SphereGeometry(0.08,32,32,6,6.3,6,6.3);
  var Puntos = [];
  for (var i=-4;i<10;i++)
  {
  	Puntos.push(new THREE.Vector2(Math.cos(i*0.2)*0.2+0.1,(i-0.1)*0.05));
  }
  var Corona1AlForma=new THREE.LatheGeometry(Puntos);
  Corona1AlForma.translate(0,1.52,0);
  Corona3AlForma.translate(0,-2,0);
  AlfilForma.translate(0,0.675,0);
  Base2AlForma.translate(0,0,-0.08);
  Base3AlForma.translate(0,0,-1.25);
  Corona1AlForma.rotateY(Math.PI);
  Corona3AlForma.rotateX(Math.PI);
  Base3AlForma.rotateX(Math.PI/2);
  Base2AlForma.rotateX(Math.PI/2);
  var BaseAlMalla = new THREE.Mesh(BaseAlForma);
  var Base2AlMalla = new THREE.Mesh(Base2AlForma);
  var Base3AlMalla = new THREE.Mesh(Base3AlForma);
  var AlfilMalla = new THREE.Mesh(AlfilForma);
  var Corona3AlMalla = new THREE.Mesh(Corona3AlForma);
  var Corona1AlMalla = new THREE.Mesh(Corona1AlForma);
  var AlfilfForma = new THREE.Geometry();
  this.merge(BaseAlMalla.geometry,BaseAlMalla.matrix);
  this.merge(Base2AlMalla.geometry,Base2AlMalla.matrix);
  this.merge(Base3AlMalla.geometry,Base3AlMalla.matrix);
  this.merge(AlfilMalla.geometry,AlfilMalla.matrix);
  this.merge(Corona3AlMalla.geometry,Corona3AlMalla.matrix);
  this.merge(Corona1AlMalla.geometry,Corona1AlMalla.matrix);
}
AJEDREZ.AlfilGeometry.prototype=new THREE.Geometry();
////////////////////////////////////////////////////////////////////

/////////////CONSTRUCTOR DE PEON///////////////////////////////////
AJEDREZ.PeonGeometry=function()
{
  THREE.Geometry.call(this);
  var BasePForma = new THREE.CylinderGeometry(0.5,0.5,0.15,64,64);
  var Base2PForma = new THREE.TorusGeometry(0.35,0.1,30,200);
  var Base3PForma = new THREE.TorusGeometry(0.2,0.07,30,200);
  var PeonForma = new THREE.CylinderGeometry(0.2,0.4,0.6,64,64);
  var CoronaPForma = new THREE.SphereGeometry(0.36,32,32,6,6.3,6,6.3);
  CoronaPForma.translate(0,-1,0);
  PeonForma.translate(0,0.375,0);
  Base2PForma.translate(0,0,-0.08);
  Base3PForma.translate(0,0,-0.7);
  CoronaPForma.rotateX(Math.PI);
  Base3PForma.rotateX(Math.PI/2);
  Base2PForma.rotateX(Math.PI/2);
  var BasePMalla = new THREE.Mesh(BasePForma);
  var Base2PMalla = new THREE.Mesh(Base2PForma);
  var Base3PMalla = new THREE.Mesh(Base3PForma);
  var PeonMalla = new THREE.Mesh(PeonForma);
  var CoronaPMalla = new THREE.Mesh(CoronaPForma);
  var PeonfForma = new THREE.Geometry();
  this.merge(BasePMalla.geometry,BasePMalla.matrix);
  this.merge(Base2PMalla.geometry,Base2PMalla.matrix);
  this.merge(Base3PMalla.geometry,Base3PMalla.matrix);
  this.merge(PeonMalla.geometry,PeonMalla.matrix);
  this.merge(CoronaPMalla.geometry,CoronaPMalla.matrix);
}
AJEDREZ.PeonGeometry.prototype=new THREE.Geometry();
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

/////////////////CREANDO ALFIL BLANCO///////////////////////////////
AJEDREZ.RetrollamadaAlfilBlanco=function(textura)
{
  var materialAlfilBlanco=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<3;i++)
  {
    AJEDREZ.AlfilesBlancos[i]=new THREE.Mesh(new AJEDREZ.AlfilGeometry(),materialAlfilBlanco);
    AJEDREZ.AlfilesBlancos[i].rotateX(Math.PI/2);
    AJEDREZ.AlfilesBlancos[i].scale.set(7,7,8);
    AJEDREZ.AlfilesBlancos[i].castShadow=true;
    AJEDREZ.escena.add(AJEDREZ.AlfilesBlancos[i]);
  }
  AJEDREZ.AlfilesBlancos[1].position.set(-15,-35,1.2);
  AJEDREZ.AlfilesBlancos[2].position.set(15,-35,1.2);
}
////////////////////////////////////////////////////////////////////

/////////////////CREANDO ALFIL NEGRO///////////////////////////////
AJEDREZ.RetrollamadaAlfilNegro=function(textura)
{
  var materialAlfilNegro=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<3;i++)
  {
    AJEDREZ.AlfilesNegros[i]=new THREE.Mesh(new AJEDREZ.AlfilGeometry(),materialAlfilNegro);
    AJEDREZ.AlfilesNegros[i].rotateX(Math.PI/2);
    AJEDREZ.AlfilesNegros[i].scale.set(7,7,8);
    AJEDREZ.AlfilesNegros[i].castShadow=true;
    AJEDREZ.escena.add(AJEDREZ.AlfilesNegros[i]);
  }
  AJEDREZ.AlfilesNegros[1].position.set(-15,35,1.2);
  AJEDREZ.AlfilesNegros[2].position.set(15,35,1.2);
}
////////////////////////////////////////////////////////////////////

/////////////////CREANDO TORRE BLANCA///////////////////////////////
AJEDREZ.RetrollamadaTorreBlanca=function(textura)
{
  var materialTorreBlanca=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<3;i++)
  {
    AJEDREZ.TorresBlancas[i]=new THREE.Mesh(new AJEDREZ.TorreGeometry(),materialTorreBlanca);
    AJEDREZ.TorresBlancas[i].rotateX(Math.PI/2);
    AJEDREZ.TorresBlancas[i].scale.set(7,7,8);
    AJEDREZ.TorresBlancas[i].castShadow=true;
    //AJEDREZ.TorresBlancas[i].receiveShadow=true;
    AJEDREZ.escena.add(AJEDREZ.TorresBlancas[i]);
  }
  AJEDREZ.TorresBlancas[1].position.set(-35,-35,1.2);
  AJEDREZ.TorresBlancas[2].position.set(35,-35,1.2);
}
////////////////////////////////////////////////////////////////////

/////////////////CREANDO TORRE NEGRA///////////////////////////////
AJEDREZ.RetrollamadaTorreNegra=function(textura)
{
  var materialTorreNegra=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<3;i++)
  {
    AJEDREZ.TorresNegras[i]=new THREE.Mesh(new AJEDREZ.TorreGeometry(),materialTorreNegra);
    AJEDREZ.TorresNegras[i].rotateX(Math.PI/2);
    AJEDREZ.TorresNegras[i].scale.set(7,7,8);
    AJEDREZ.TorresNegras[i].castShadow=true;
    //AJEDREZ.TorresNegras[i].receiveShadow=true;
    AJEDREZ.escena.add(AJEDREZ.TorresNegras[i]);
  }
  AJEDREZ.TorresNegras[1].position.set(-35,35,1.2);
  AJEDREZ.TorresNegras[2].position.set(35,35,1.2);
}
////////////////////////////////////////////////////////////////////

/////////////////CREANDO PEON BLANCO///////////////////////////////
AJEDREZ.RetrollamadaPeonBlanco=function(textura)
{
  var a=1;
  var materialPeonBlanco=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<9;i++)
  {
    AJEDREZ.PeonesBlancos[i]=new THREE.Mesh(new AJEDREZ.PeonGeometry(),materialPeonBlanco);
    AJEDREZ.PeonesBlancos[i].rotateX(Math.PI/2);
    AJEDREZ.PeonesBlancos[i].scale.set(7,7,8);
    AJEDREZ.PeonesBlancos[i].castShadow=true;
    //AJEDREZ.PeonesBlancos[i].receiveShadow=true;
    AJEDREZ.escena.add(AJEDREZ.PeonesBlancos[i]);
    AJEDREZ.PeonesBlancos[i].position.set((a*10)-45,-25,1.2);
    a=a+1;
  }
}
////////////////////////////////////////////////////////////////////

/////////////////CREANDO PEON NEGRO///////////////////////////////
AJEDREZ.RetrollamadaPeonNegro=function(textura)
{
  var a=1;
  var materialPeonNegro=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<9;i++)
  {
    AJEDREZ.PeonesNegros[i]=new THREE.Mesh(new AJEDREZ.PeonGeometry(),materialPeonNegro);
    AJEDREZ.PeonesNegros[i].rotateX(Math.PI/2);
    AJEDREZ.PeonesNegros[i].scale.set(7,7,8);
    AJEDREZ.PeonesNegros[i].castShadow=true;
    //AJEDREZ.PeonesNegros[i].receiveShadow=true;
    AJEDREZ.escena.add(AJEDREZ.PeonesNegros[i]);
    AJEDREZ.PeonesNegros[i].position.set((a*10)-45,25,1.2);
    a=a+1;
  }
}
////////////////////////////////////////////////////////////////////

////////////CREANDO CASILLAS BLANCAS//////////////////////
AJEDREZ.RetrollamadaCasillaBlanca=function(textura)
{
  var a=1;
  var b=0;
  var c=2;
  var materialCasillaBlanca=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<65; i ++)
  {
    AJEDREZ.CasillasBlancas[i]=new THREE.Mesh(new AJEDREZ.CasillasGeometry(),materialCasillaBlanca);
    AJEDREZ.CasillasBlancas[i].receiveShadow=true;
  }
  for (var j=1;j<65; j ++)
  {
    
    if(j%2!==0)
      {
        AJEDREZ.CasillasBlancas[j].position.set((c*10)-45,(b*10)-(35),0.6);
        AJEDREZ.escena.add(AJEDREZ.CasillasBlancas[j]);
        a=a+1;
      }
    if(a==5)
    {
      a=1;
      b=b+1;
      if(b%2!==0)
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

////////////CREANDO CASILLAS NEGRAS//////////////////////
AJEDREZ.RetrollamadaCasillaNegra=function(textura)
{
  var a=1;
  var b=0;
  var c=0;
  var materialCasillaNegra=new THREE.MeshLambertMaterial({map:textura});
  for (var i=1;i<65; i ++)
  {
    AJEDREZ.CasillasNegras[i]=new THREE.Mesh(new AJEDREZ.CasillasGeometry(),materialCasillaNegra);
    AJEDREZ.CasillasNegras[i].receiveShadow=true;
  }
  for (var j=1;j<65; j ++)
  {
    if(j%2==0)
      {
        AJEDREZ.CasillasNegras[j].position.set((c*10)-45,(b*10)-(35),0.6);
        AJEDREZ.escena.add(AJEDREZ.CasillasNegras[j]);
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

///////////////////CREANDO EL TABLERO///////////////////////////////
AJEDREZ.RetrollamadaTablero=function(textura)
{
  var materialTablero=new THREE.MeshLambertMaterial({map:textura});
  AJEDREZ.Tablero=new THREE.Mesh(new AJEDREZ.TableroGeometry(),materialTablero);
  AJEDREZ.Tablero.receiveShadow=true;
  AJEDREZ.escena.add(AJEDREZ.Tablero);
}
////////////////////////////////////////////////////////////////////


AJEDREZ.setupPiezas=function()
{
  AJEDREZ.cargadorAlfilBlanco=new THREE.TextureLoader(); 
  AJEDREZ.cargadorAlfilBlanco.load("maderaB.jpg",AJEDREZ.RetrollamadaAlfilBlanco);
  AJEDREZ.cargadorAlfilNegro=new THREE.TextureLoader(); 
  AJEDREZ.cargadorAlfilNegro.load("maderaN.jpg",AJEDREZ.RetrollamadaAlfilNegro);
  AJEDREZ.cargadorTorreBlanca=new THREE.TextureLoader(); 
  AJEDREZ.cargadorTorreBlanca.load("maderaB.jpg",AJEDREZ.RetrollamadaTorreBlanca);  
  AJEDREZ.cargadorPeonBlanco=new THREE.TextureLoader(); 
  AJEDREZ.cargadorPeonBlanco.load("maderaB.jpg",AJEDREZ.RetrollamadaPeonBlanco);  
  AJEDREZ.cargadorCasillaBlanca=new THREE.TextureLoader(); 
  AJEDREZ.cargadorCasillaBlanca.load("marmolB.jpg",AJEDREZ.RetrollamadaCasillaBlanca);  
  AJEDREZ.cargadorTorreNegra=new THREE.TextureLoader(); 
  AJEDREZ.cargadorTorreNegra.load("maderaN.jpg",AJEDREZ.RetrollamadaTorreNegra);  
  AJEDREZ.cargadorPeonNegro=new THREE.TextureLoader(); 
  AJEDREZ.cargadorPeonNegro.load("maderaN.jpg",AJEDREZ.RetrollamadaPeonNegro);  
  AJEDREZ.cargadorCasillaNegra=new THREE.TextureLoader(); 
  AJEDREZ.cargadorCasillaNegra.load("marmolN.jpg",AJEDREZ.RetrollamadaCasillaNegra);  
  AJEDREZ.cargadorTablero=new THREE.TextureLoader(); 
  AJEDREZ.cargadorTablero.load("marmolA.jpg",AJEDREZ.RetrollamadaTablero);  
}



AJEDREZ.setup=function()
{
  AJEDREZ.BANDERA=true;
  AJEDREZ.escena=new THREE.Scene();
  AJEDREZ.CRL();
  AJEDREZ.setupPiezas();
  AJEDREZ.escena.add(AJEDREZ.luzPuntual);   
}

AJEDREZ.loop=function()
{
  requestAnimationFrame(AJEDREZ.loop);
  if(AJEDREZ.BANDERA)
  {
    AJEDREZ.renderizador.render(AJEDREZ.escena,AJEDREZ.camara);
  }
  else
  {
    AJEDREZ.setup();
  }
  
}




AJEDREZ.setup();
AJEDREZ.loop();
