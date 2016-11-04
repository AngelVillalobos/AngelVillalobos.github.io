var ajedrez= new THREE.Object3D;
ajedrez.torresBlancas=new Array();
ajedrez.torresNegras=new Array();
ajedrez.peonesBlancos=new Array();
ajedrez.peonesNegros=new Array();
ajedrez.casillasNegras=new Array();
ajedrez.casillasBlancas=new Array();
ajedrez.alfilesBlancos=new Array();
ajedrez.alfilesNegros=new Array();


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

function CasillaBlanca(size,x,y)
{
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshBasicMaterial({color:0xffffff}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
CasillaBlanca.prototype=new THREE.Mesh();

function CasillaNegra(size,x,y)
{
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshBasicMaterial({color:0x00ffff}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
CasillaNegra.prototype=new THREE.Mesh();

function Borde(size,x,y)
{
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshBasicMaterial({color:0xff00ff}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
Borde.prototype=new THREE.Mesh();

Environment.prototype.setMap=function(map)
{
  var pos=Math.floor(map.length/2);
  for(var i=0;i<map.length;i++)
  {
    for(var j=0;j<map.length;j++)
    {
      if(map[i][j]==="n")
        this.add(new CasillaBlanca(10,(i*10)-45,(j*10)-45));
      else if(map[i][j]==="b")
        this.add(new CasillaNegra(10,(i*10)-45,(j*10)-45));
      else if(map[i][j]==="B")
        this.add(new Borde(10,(i*10)-45,(j*10)-45));
    }
  }
}

function setup()
{
  var tablero=new Array();
  tablero[0]="BBBBBBBB";
  tablero[1]="BbnbnbnbnB";
  tablero[2]="BnbnbnbnbB";
  tablero[3]="BbnbnbnbnB";
  tablero[4]="BnbnbnbnbB";
  tablero[5]="BbnbnbnbnB";
  tablero[6]="BnbnbnbnbB";
  tablero[7]="BbnbnbnbnB";
  tablero[8]="BnbnbnbnbB";
  tablero[9]="BBBBBBBB";
 
   
  environment=new Environment();
  environment.setMap(tablero);
  //////CAMARA////
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  camara.position.z=120;
  camara.position.y=-90;
  camara.lookAt(new THREE.Vector3(0,0,0));
  /////RENDERIZADOR////
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderizador.domElement);
  renderizador.shadowMapEnabled=true;
  /////LUZ////
  luzPuntual=new THREE.PointLight(0xFFFFFF,1.2);
  luzPuntual.position.x=150;
  luzPuntual.position.y=-150;
  luzPuntual.position.z=150;
  luzPuntual.castShadow=true;
  environment.add(camara);
  environment.add(luzpuntual);
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
