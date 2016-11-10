///////////////CONSTRUCTOR DEL ALFIL////////////////////////////////
AlfilGeometry=function()
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
AlfilGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR PEON///////////////
PeonGeometry=function()
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
PeonGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR TORRE///////////////
TorreGeometry=function()
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
TorreGeometry.prototype=new THREE.Geometry();
///////////////AGENTE///////////////
function Agent(x=0,y=0)
{
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
}

Agent.prototype=new THREE.Object3D();

Agent.prototype.sense=function(environment){};
Agent.prototype.plan=function(environment){};
Agent.prototype.act=function(environment){};

function Environment()
{
  THREE.Scene.call(this);
}

Environment.prototype=new THREE.Scene();

Environment.prototype.sense=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].sense!==undefined)
      this.children[i].sense(this);
  }
}

Environment.prototype.plan=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].plan!==undefined)
      this.children[i].plan(this);
  }
}

Environment.prototype.act=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].act!==undefined)
      this.children[i].act(this);
  }
}
///////////////CASILLA BLANCA///////////////
function CasillaBlanca(size,x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('marmolB.jpg');
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
CasillaBlanca.prototype=new THREE.Mesh();
///////////////CASILLA NEGRA///////////////
function CasillaNegra(size,x,y,textura)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('marmolN.jpg');
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
CasillaNegra.prototype=new THREE.Mesh();
///////////////CASILLA AZUL (BORDE)///////////////
function Borde(size,x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('marmolA.jpg');
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
Borde.prototype=new THREE.Mesh();
///////////////PEON NEGRO///////////////
function PeonNegro(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaN.jpg');
  THREE.Mesh.call(this,new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
PeonNegro.prototype=new THREE.Mesh();
///////////////PEON BLANCO///////////////
function PeonBlanco(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaB.jpg');
  THREE.Mesh.call(this,new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
PeonBlanco.prototype=new THREE.Mesh();
///////////////TORRE NEGRA///////////////
function TorreNegra(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaN.jpg');
  THREE.Mesh.call(this,new TorreGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
TorreNegra.prototype=new THREE.Mesh();
///////////////TORRE BLANCA///////////////
function TorreBlanca(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaB.jpg');
  THREE.Mesh.call(this,new TorreGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
TorreBlanca.prototype=new THREE.Mesh();
///////////////ALFIL NEGRO///////////////
function AlfilNegro(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaN.jpg');
  THREE.Mesh.call(this,new AlfilGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
AlfilNegro.prototype=new THREE.Mesh();
///////////////ALFIL BLANCO///////////////
function AlfilBlanco(x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaB.jpg');
  THREE.Mesh.call(this,new AlfilGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.6;
}
AlfilBlanco.prototype=new THREE.Mesh();

Environment.prototype.setMapCasilla=function(map)
{
  cargador=new THREE.TextureLoader();
  for(var i=0;i<map.length;i++)
  {
    for(var j=0;j<map.length;j++)
    {
      if(map[i][j]==="n")
      {
        Casilla=new CasillaBlanca(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="b")
      {
        Casilla=new CasillaNegra(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="B")
      {
        CBorde=new Borde(10,(i*10)-45,(j*10)-45);
        CBorde.receiveShadow=true;
        this.add(CBorde);
      }
    }
  }
}

Environment.prototype.setMapPiezas=function(map)
{
  var pos=Math.floor(map.length/2);
  for(var i=0;i<map.length;i++)
  {
    for(var j=0;j<map.length;j++)
    {
      if(map[i][j]==="p")
      {
        Peon=new PeonNegro((j*10)-45,(i*10)-45);
        Peon.scale.set(7,7,8);
        Peon.rotateX(Math.PI/2);
        Peon.castshadow=true;
        this.add(Peon);
      }
      else if(map[i][j]==="P")
      {
        Peon=new PeonBlanco((j*10)-45,(i*10)-45);
        Peon.scale.set(7,7,8);
        Peon.rotateX(Math.PI/2);
        Peon.castshadow=true;
        this.add(Peon);
      }
      else if(map[i][j]==="t")
      {
        Torre=new TorreNegra((j*10)-45,(i*10)-45);
        Torre.scale.set(7,7,8);
        Torre.rotateX(Math.PI/2);
        Torre.castshadow=true;
        this.add(Torre);
      }
      else if(map[i][j]==="T")
      {
        Torre=new TorreBlanca((j*10)-45,(i*10)-45);
        Torre.scale.set(7,7,8);
        Torre.rotateX(Math.PI/2);
        Torre.castshadow=true;
        this.add(Torre);
      }
      else if(map[i][j]==="a")
      {
        Alfil=new AlfilNegro((j*10)-45,(i*10)-45);
        Alfil.scale.set(7,7,8);
        Alfil.rotateX(Math.PI/2);
        Alfil.castshadow=true;
        this.add(Alfil);
      }
      else if(map[i][j]==="A")
      {
        Alfil=new AlfilBlanco((j*10)-45,(i*10)-45);
        Alfil.scale.set(7,7,8);
        Alfil.rotateX(Math.PI/2);
        Alfil.castshadow=true;
        this.add(Alfil);
      }
    }
  }
}

function setup()
{
  var tablero=new Array();
  tablero[0]="BBBBBBBBBB";
  tablero[1]="BbnbnbnbnB";
  tablero[2]="BnbnbnbnbB";
  tablero[3]="BbnbnbnbnB";
  tablero[4]="BnbnbnbnbB";
  tablero[5]="BbnbnbnbnB";
  tablero[6]="BnbnbnbnbB";
  tablero[7]="BbnbnbnbnB";
  tablero[8]="BnbnbnbnbB";
  tablero[9]="BBBBBBBBBB";
  var piezas=new Array();
  piezas[0]="          ";
  piezas[1]=" TCAXRACT ";
  piezas[2]=" PPPPPPPP ";
  piezas[3]="          ";
  piezas[4]="          ";
  piezas[5]="          ";
  piezas[6]="          ";
  piezas[7]=" pppppppp ";
  piezas[8]=" tcaxract ";
  piezas[9]="          ";
   
  environment=new Environment();
  environment.setMapCasilla(tablero);
  environment.setMapPiezas(piezas);
  //////CAMARA////
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  //camara.position.z=120;
  camara.position.y=-90;
  camara.lookAt(new THREE.Vector3(0,0,0));
  /////RENDERIZADOR////
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderizador.domElement);
  renderizador.shadowMapEnabled=true;
  /////LUZ////
  luzPuntual=new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=150;
  luzPuntual.position.y=-150;
  luzPuntual.position.z=150;
  luzPuntual.castShadow=true;
  environment.add(camara);
  environment.add(luzPuntual);
}
function loop()
{
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  renderizador.render(environment,camara);
}

var environment,camara,renderizador,luzpuntual;
setup();
loop();


