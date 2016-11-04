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
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshBasicMaterial({color:0x000000}));
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
        this.add(new CasillaBlanca(10,i*10,j*10));
      else if(map[i][j]==="b")
        this.add(new CasillaNegra(10,i*10,j*10));
      else if(map[i][j]==="B")
        this.add(new Borde(10,i*10,j*10));
    }
  }
}

function setup()
{
  var mapa=new Array();
  mapa[0]="BBBBBBBB";
  mapa[1]="BbnbnbnbnB";
  mapa[2]="BnbnbnbnbB";
  mapa[3]="BbnbnbnbnB";
  mapa[4]="BnbnbnbnbB";
  mapa[5]="BbnbnbnbnB";
  mapa[6]="BnbnbnbnbB";
  mapa[7]="BbnbnbnbnB";
  mapa[8]="BnbnbnbnbB";
  mapa[9]="BBBBBBBB";
 
   
  environment=new Environment();
  environment.setMap(mapa);
  camara=new THREE.PerspectiveCamera();
  camara.position.z=30;
  renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement); 
  environment.add(camara);
}
function loop()
{
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  renderizador.render(environment,camara);
}

var environment,camara,renderizador;
setup();
loop();
