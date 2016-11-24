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
  //var PeonfForma = new THREE.Geometry();
  this.merge(BasePMalla.geometry,BasePMalla.matrix);
  this.merge(Base2PMalla.geometry,Base2PMalla.matrix);
  this.merge(Base3PMalla.geometry,Base3PMalla.matrix);
  this.merge(PeonMalla.geometry,PeonMalla.matrix);
  this.merge(CoronaPMalla.geometry,CoronaPMalla.matrix);
}
PeonGeometry.prototype=new THREE.Geometry();
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
  if(Q===1)
    textura=cargador.load('marmolB.jpg');
  else if (Q===2)
    textura=cargador.load('marmolN.jpg');
  else
    textura=cargador.load('marmolA.jpg');
  
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.receiveShadow=true;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
CasillaBlanca.prototype=new THREE.Mesh();
///////////////CASILLA NEGRA///////////////
function CasillaNegra(size,x,y)
{
  cargador=new THREE.TextureLoader();
  textura=cargador.load('marmolN.jpg');
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.3,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.receiveShadow=true;
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
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,5,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.receiveShadow=true;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
Borde.prototype=new THREE.Mesh();
///////////////Armando el Tablero///////////////
Environment.prototype.setMapCasilla=function(map)
{
  cargador=new THREE.TextureLoader();
  for(var i=0;i<map.length;i++)
  {
    for(var j=0;j<map.length;j++)
    {
      if(map[i][j]==="n")
      {
        Q=1;
        Casilla=new CasillaBlanca(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="b")
      {
        Q=2;
        Casilla=new CasillaBlanca(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="B")
      {
        Q=3;
        Casilla=new CasillaBlanca(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
    }
  }
}
///////////////Colocando Piezas///////////////
Environment.prototype.setMapPiezas=function(map)
{
  for(var i=0;i<map.length;i++)
  {
    for(var j=0;j<map.length;j++)
    {
      if(map[i][j]==="p")
      {
        q=1;
        this.add(new Peon((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="P")
      {
        q=2;
        this.add(new Peon((j*10)-45,(i*10)-45));
      }
    }
  }
}
function Sensor(position,direction)
{
  THREE.Raycaster.call(this,position,direction);
  this.colision=false;
}
Sensor.prototype = new THREE.Raycaster();

///////////////PEON NEGRO///////////////
function Peon(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(q===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
    
  //
  //
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.texture=textura;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(7,7,7);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Peon.prototype=new Agent();

Peon.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  //console.log(obstaculo[0].distance)
  if((obstaculo.length>0 && (obstaculo[0].distance<=2.0363866)))
  {console.log(obstaculo[0])
    this.sensor.colision=true;}
  else
    //console.log(obstaculo[0].distance)
    this.sensor.colision=false;
};

Peon.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if(this.sensor.colision===true)
  {
    this.actuator.commands.push('rotateCCW');
  }
  else
  { 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
  }
};

Peon.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Peon.prototype.operations={};

Peon.prototype.operations.goStraightX=function(pieza,distance)
{
  if(distance===undefined)
  {
    if(X<x)
      distance=0.5;
    else if(X===x)
      distance=0;
    else
      distance=-0.5; 
  }
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
};

Peon.prototype.operations.goStraightY=function(pieza,distance)
{
  if(distance===undefined)
   {
    if(Y<y)
      distance=0.5;
    else if(Y===y)
      distance=0;
    else
      distance=-0.5; 
  }
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Peon.prototype.operations.goStraight=function(pieza,distance)
{
  if(distance===undefined)
      distance=-0.5; 
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Peon.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Peon.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};

function Teclado()
{
  var avance=0.4;
  if(event.keyCode==39)
  {
    environment.children[100].position.x+=avance;
  }
  else if(event.keyCode==37)
  {
    environment.children[100].position.x+=-avance;
  }
  else if(event.keyCode==38)
  {
    environment.children[100].position.y+=avance;
  }
  else if(event.keyCode==40)
  {
    environment.children[100].position.y+=-avance;
  }
}

function SeleccionD(event)
{
  
  event.preventDefault();
  var mouse3D=new THREE.Vector3((event.clientX/window.innerWidth)*2-1,-(event.clientY/window.innerHeight)*2+1,0);     
  var raycaster=new THREE.Raycaster();                                        
  raycaster.setFromCamera(mouse3D,camara);
  seleccion=raycaster.intersectObjects(environment.children,true);
  if(seleccion.length>0)
  {
    if(seleccionF1==false)
      id=seleccion[0].object.id;
    console.log(id);
    
    
    if(seleccionF1==true)
    {
      x=seleccion[0].point.x;
      y=seleccion[0].point.y;
      seleccionF2=true;
    }
    /*else
    {
      xf=x;
      yf=y
    }*/
    
    if((-50<x&&x<50&&40<y&&y<50)||(-50<x&&x<50&&-50<y&&y<-40)||(-50<y&&y<50&&-50<x&&x<-40)||(-50<y&&y<50&&40<x&&x<50))
      seleccion[0].object.material.color.setHex(0xffffff);
    else
      seleccion[0].object.material.color.setHex(0x00ff00);
    
    if(-40<x&&x<-30)
      x=-35;
    else if(-30<x&&x<-20)
      x=-25;
    else if(-20<x&&x<-10)
      x=-15;
    else if(-10<x&&x<0)
      x=-5;
    else if(0<x&&x<10)
      x=5;
    else if(10<x&&x<20)
      x=15;
    else if(20<x&&x<30)
      x=25;
    else if(30<x&&x<40)
      x=35;
    if(-40<y&&y<-30)
      y=-35;
    else if(-30<y&&y<-20)
      y=-25;
    else if(-20<y&&y<-10)
      y=-15;
    else if(-10<y&&y<0)
      y=-5;
    else if(0<y&&y<10)
      y=5;
    else if(10<y&&y<20)
      y=15;
    else if(20<y&&y<30)
      y=25;
    else if(30<y&&y<40)
      y=35;
    
  }
}

function SeleccionU(event) 
{
  activar=true;
  event.preventDefault();
  seleccion[0].object.material.color.setHex(0xffffff);
  seleccionF1=true;
}




function setup()
{
  
  document.documentElement.style.overflow = 'hidden';
  var Peon=new Array();
  /*var tablero=new Array();
  tablero[0]="BBBBBBBBBB";
  tablero[1]="B        B";
  tablero[2]="B        B";
  tablero[3]="B        B";
  tablero[4]="B        B";
  tablero[5]="B        B";
  tablero[6]="B        B";
  tablero[7]="B        B";
  tablero[8]="B        B";
  tablero[9]="BBBBBBBBBB";*/
  
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
  
  var Piezas=new Array();
  Piezas[0]="          ";
  Piezas[1]="          ";
  Piezas[2]="    p     ";
  Piezas[3]="          ";
  Piezas[4]="          ";
  Piezas[5]="          ";
  Piezas[6]="    P     ";
  Piezas[7]="          ";
  Piezas[8]="          ";
  Piezas[9]="          ";
     
  environment=new Environment();
  environment.setMapCasilla(tablero);
  environment.setMapPiezas(Piezas);
  
  document.addEventListener('keydown',Teclado);
  document.addEventListener('mousedown',SeleccionD);
  document.addEventListener('mouseup',SeleccionU);

  ////CAMARA////
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  camara.position.z=120;
  //camara.position.y=-90;
  camara.lookAt(new THREE.Vector3(0,0,0));
  /////RENDERIZADOR////
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderizador.domElement);
  renderizador.shadowMap.enabled=true;
  /////LUZ////
  luzPuntual=new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=50;
  luzPuntual.position.y=-50;
  luzPuntual.position.z=50;
  luzPuntual.castShadow=true;
  environment.add(camara);
  environment.add(luzPuntual); 
  
}
function loop()
{
  requestAnimationFrame(loop);
  
  
  //if(activar==true)
  //{
    if(id===114)
    {
      X=environment.children[100].position.x;
      Y=environment.children[100].position.y;
      if(seleccionF2==true)
      {
        environment.sense();
        environment.plan();
        //environment.children[100].sense();
        //environment.children[100].plan();
        environment.children[100].act();
      }
    }
    else if(id===121)
    {
      X=environment.children[101].position.x;
      Y=environment.children[101].position.y;
      if(seleccionF2==true)
      {
        environment.sense();
        environment.plan();
        //environment.children[101].sense();
        //environment.children[101].plan();
        environment.children[101].act();
      }
    }

  renderizador.render(environment,camara);

}



var q,Q,id,environment,camara,renderizador,luzpuntual,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();
