///////////////CONSTRUCTOR CABALLO///////////////
CaballoGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseCaballo1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoCaballo1=new THREE.BoxGeometry(0.5,1,0.5);
  var CabezaCaballo1=new THREE.BoxGeometry(0.3,0.3,0.5);
  BaseCaballo1.translate(0,0,0);
  CuerpoCaballo1.translate(0,0.3,0);
  CabezaCaballo1.translate(0.3,0.6,0);
  var BaseCaballo=new THREE.Mesh(BaseCaballo1);
  var CuerpoCaballo=new THREE.Mesh(CuerpoCaballo1);
  var CabezaCaballo=new THREE.Mesh(CabezaCaballo1);
  this.merge(BaseCaballo.geometry,BaseCaballo.matrix);
  this.merge(CuerpoCaballo.geometry,CuerpoCaballo.matrix);
  this.merge(CabezaCaballo.geometry,CabezaCaballo.matrix);
}
CaballoGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR ALFIL///////////////
AlfilGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseAlfil1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoAlfil1=new THREE.ConeGeometry(0.45,1.2,4,1,false,Math.PI/4);
  BaseAlfil1.translate(0,0,0);
  CuerpoAlfil1.translate(0,0.7,0); 
  var BaseAlfil=new THREE.Mesh(BaseAlfil1);
  var CuerpoAlfil=new THREE.Mesh(CuerpoAlfil1);
  var AlfilForma = new THREE.Geometry();
  this.merge(BaseAlfil.geometry,BaseAlfil.matrix);
  this.merge(CuerpoAlfil.geometry,CuerpoAlfil.matrix);
}
AlfilGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR REINA///////////////
ReinaGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseReina1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoReina1=new THREE.CylinderGeometry(0.3,0.3,1.3,32);
  var CoronaReina1=new THREE.SphereGeometry(0.23,32,32);
  BaseReina1.translate(0,0,0);
  CuerpoReina1.translate(0,0.5,0);
  CoronaReina1.translate(0,1.3,0);
  var BaseReina=new THREE.Mesh(BaseReina1);
  var CuerpoReina=new THREE.Mesh(CuerpoReina1);
  var CoronaReina=new THREE.Mesh(CoronaReina1);
  this.merge(BaseReina.geometry,BaseReina.matrix);
  this.merge(CuerpoReina.geometry,CuerpoReina.matrix);
  this.merge(CoronaReina.geometry,CoronaReina.matrix);
}
ReinaGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR REINA///////////////
ReyGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseRey1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoRey1=new THREE.BoxGeometry(0.5,1.3,0.5);
  var CoronaRey1=new THREE.BoxGeometry(0.3,0.3,0.3);
  BaseRey1.translate(0,0,0);
  CuerpoRey1.translate(0,0.5,0);
  CoronaRey1.translate(0,1.3,0);
  CoronaRey1.rotateY(Math.PI/4);
  var BaseRey=new THREE.Mesh(BaseRey1);
  var CuerpoRey=new THREE.Mesh(CuerpoRey1);
  var CoronaRey=new THREE.Mesh(CoronaRey1);
  this.merge(BaseRey.geometry,BaseRey.matrix);
  this.merge(CuerpoRey.geometry,CuerpoRey.matrix);
  this.merge(CoronaRey.geometry,CoronaRey.matrix);
}
ReyGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR PEON///////////////
PeonGeometry=function()
{
  THREE.Geometry.call(this);
  var BasePeon1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoPeon1=new THREE.BoxGeometry(0.5,0.8,0.5);
  BasePeon1.translate(0,0,0);
  CuerpoPeon1.translate(0,0.4,0);
  var BasePeon=new THREE.Mesh(BasePeon1);
  var CuerpoPeon=new THREE.Mesh(CuerpoPeon1);
  this.merge(BasePeon.geometry,BasePeon.matrix);
  this.merge(CuerpoPeon.geometry,CuerpoPeon.matrix);
}
PeonGeometry.prototype=new THREE.Geometry();
///////////////CONSTRUCTOR TORRE///////////////
TorreGeometry=function()
{
  THREE.Geometry.call(this);
  var BaseTorre1=new THREE.BoxGeometry(0.7,0.2,0.7);
  var CuerpoTorre1=new THREE.BoxGeometry(0.6,1.2,0.6);
  BaseTorre1.translate(0,0,0);
  CuerpoTorre1.translate(0,0.7,0);
  var BaseTorre=new THREE.Mesh(BaseTorre1);
  var CuerpoTorre=new THREE.Mesh(CuerpoTorre1);
  this.merge(BaseTorre.geometry,BaseTorre.matrix);
  this.merge(CuerpoTorre.geometry,CuerpoTorre.matrix);
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
///////////////CASILLA///////////////
function Casillas(size,x,y)
{
  cargador=new THREE.TextureLoader();
  if(sTC===1)
    textura=cargador.load('marmolB.jpg');
  else if (sTC===2)
    textura=cargador.load('marmolN.jpg');
  else
    textura=cargador.load('marmolA.jpg');
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,0.4,10,10,10),new THREE.MeshLambertMaterial({map:textura}));
  this.size=size;
  this.receiveShadow=true;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0;
}
Casillas.prototype=new THREE.Mesh();
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
        sTC=1;
        Casilla=new Casillas(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="b")
      {
        sTC=2;
        Casilla=new Casillas(10,(i*10)-45,(j*10)-45);
        Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="B")
      {
        sTC=3;
        Borde=new Casillas(10,(i*10)-45,(j*10)-45);
        Borde.receiveShadow=true;
        this.add(Borde);
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
      if(map[i][j]==="c")
      {
        sTP=1;
        this.add(new Caballo((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="C")
      {
        sTP=2;
        this.add(new Caballo((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="a")
      {
        sTP=1;
        this.add(new Alfil((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="A")
      {
        sTP=2;
        this.add(new Alfil((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="x")
      {
        sTP=1;
        this.add(new Reina((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="X")
      {
        sTP=2;
        this.add(new Reina((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="r")
      {
        sTP=1;
        this.add(new Rey((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="R")
      {
        sTP=2;
        this.add(new Rey((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="t")
      {
        sTP=1;
        this.add(new Torre((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="T")
      {
        sTP=2;
        this.add(new Torre((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="p")
      {
        sTP=1;
        this.add(new Peon((j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="P")
      {
        sTP=2;
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

///////////////CABALLO///////////////
function Caballo(x,y,textura)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new CaballoGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Caballo.prototype=new Agent();

Caballo.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Caballo.prototype.plan=function(environment)
{
     this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
};

Caballo.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Caballo.prototype.operations={};

Caballo.prototype.operations.goStraightX=function(pieza,distance)
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

Caballo.prototype.operations.goStraightY=function(pieza,distance)
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

Caballo.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Caballo.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};

///////////////ALFIL///////////////
function Alfil(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new AlfilGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Alfil.prototype=new Agent();

Alfil.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Alfil.prototype.plan=function(environment)
{
     this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
};

Alfil.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Alfil.prototype.operations={};

Alfil.prototype.operations.goStraightX=function(pieza,distance)
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

Alfil.prototype.operations.goStraightY=function(pieza,distance)
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

Alfil.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Alfil.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};
///////////////REINA///////////////
function Reina(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new ReinaGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Reina.prototype=new Agent();

Reina.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Reina.prototype.plan=function(environment)
{
     this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
};

Reina.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Reina.prototype.operations={};

Reina.prototype.operations.goStraightX=function(pieza,distance)
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

Reina.prototype.operations.goStraightY=function(pieza,distance)
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

Reina.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Reina.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};
///////////////REY///////////////
function Rey(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new ReyGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Rey.prototype=new Agent();

Rey.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Rey.prototype.plan=function(environment)
{
     this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
};

Rey.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Rey.prototype.operations={};

Rey.prototype.operations.goStraightX=function(pieza,distance)
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

Rey.prototype.operations.goStraightY=function(pieza,distance)
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

Rey.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Rey.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};
///////////////TORRE///////////////
function Torre(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new TorreGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Torre.prototype=new Agent();

Torre.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=2)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Torre.prototype.plan=function(environment)
{
   this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
};

Torre.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Torre.prototype.operations={};

Torre.prototype.operations.goStraightX=function(pieza,distance)
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

Torre.prototype.operations.goStraightY=function(pieza,distance)
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

Torre.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Torre.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};
///////////////PEON///////////////
function Peon(x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  if(sTP===1)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.add(this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Peon.prototype=new Agent();

Peon.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=1)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};

Peon.prototype.plan=function(environment)
{
     this.actuator.commands=[];
  //if(this.sensor.colision===true)
  //{
  //  this.actuator.commands.push('rotateCCW');
  //}
  //else
  //{ 
    if(X!==x)
      this.actuator.commands.push('goStraightX');
    else if(X===x&&Y!==y) 
      this.actuator.commands.push('goStraightY');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
      if(turno===1)
        turno=0;
      else
        turno=1;
    }
  //}
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
///////////////SELECCION DE POSICIONES///////////////
function SeleccionD(event)
{
  event.preventDefault();
  var mouse3D=new THREE.Vector3((event.clientX/window.innerWidth)*2-1,-(event.clientY/window.innerHeight)*2+1,0);     
  var raycaster=new THREE.Raycaster();                                        
  raycaster.setFromCamera(mouse3D,camara);
  seleccion=raycaster.intersectObjects(environment.children,true);
  if(seleccion.length>0)
  {
    console.log(turno);
      if(turno===1)
        turno=0;
      else
        turno=1;
    console.log(turno);
    //console.log(environment.children)
    if(seleccionF1==false)
      id=seleccion[0].object.id;
    console.log(id);
    
    if(seleccionF1==true)
    {
      x=seleccion[0].point.x;
      y=seleccion[0].point.y;
      seleccionF2=true;
    }
    
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
    console.log(x);
    console.log(y);
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
  if(turno===1)
    alert("Inician Negras");
  else
    alert("Inician Blancas");
  document.documentElement.style.overflow = 'hidden';
    
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
  Piezas[1]=" tcaxract ";
  Piezas[2]=" pppppppp ";
  Piezas[3]="          ";
  Piezas[4]="          ";
  Piezas[5]="          ";
  Piezas[6]="          ";
  Piezas[7]=" PPPPPPPP ";
  Piezas[8]=" TCAXRACT ";
  Piezas[9]="          ";
     
  environment=new Environment();
  environment.setMapCasilla(tablero);
  environment.setMapPiezas(Piezas);

  document.addEventListener('mousedown',SeleccionD);
  document.addEventListener('mouseup',SeleccionU);

  ////CAMARA////
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
  environment.sense();
  environment.plan();
  if(turno===1)
  {
    if(id===114)
      {
        X=environment.children[100].position.x;
        Y=environment.children[100].position.y;
        if(seleccionF2==true)
          environment.children[100].act();
      }
    else if(id===119)
      {
        X=environment.children[101].position.x;
        Y=environment.children[101].position.y;
        if(seleccionF2==true)
          environment.children[101].act();
      }
    else if(id===123)
      {
        X=environment.children[102].position.x;
        Y=environment.children[102].position.y;
        if(seleccionF2==true)
          environment.children[102].act();
      }
    else if(id===128)
      {
        X=environment.children[103].position.x;
        Y=environment.children[103].position.y;
        if(seleccionF2==true)
          environment.children[103].act();
      }
    else if(id===133)
      {
        X=environment.children[104].position.x;
        Y=environment.children[104].position.y;
        if(seleccionF2==true)
          environment.children[104].act();
      }
    else if(id===137)
      {
        X=environment.children[105].position.x;
        Y=environment.children[105].position.y;
        if(seleccionF2==true)
          environment.children[105].act();
      }
    else if(id===142)
      {
        X=environment.children[106].position.x;
        Y=environment.children[106].position.y;
        if(seleccionF2==true)
          environment.children[106].act();
      }
    else if(id===146)
      {
        X=environment.children[107].position.x;
        Y=environment.children[107].position.y;
        if(seleccionF2==true)
          environment.children[107].act();
      }
    else if(id===150)
      {
        X=environment.children[108].position.x;
        Y=environment.children[108].position.y;
        if(seleccionF2==true)
          environment.children[108].act();
      }
    else if(id===154)
      {
        X=environment.children[109].position.x;
        Y=environment.children[109].position.y;
        if(seleccionF2==true)
          environment.children[109].act();
      }
    else if(id===158)
      {
        X=environment.children[110].position.x;
        Y=environment.children[110].position.y;
        if(seleccionF2==true)
          environment.children[110].act();
      }
    else if(id===162)
      {
        X=environment.children[111].position.x;
        Y=environment.children[111].position.y;
        if(seleccionF2==true)
          environment.children[111].act();
      }
    else if(id===166)
      {
        X=environment.children[112].position.x;
        Y=environment.children[112].position.y;
        if(seleccionF2==true)
          environment.children[112].act();
      }
    else if(id===170)
      {
        X=environment.children[113].position.x;
        Y=environment.children[113].position.y;
        if(seleccionF2==true)
          environment.children[113].act();
      }
    else if(id===174)
      {
        X=environment.children[114].position.x;
        Y=environment.children[114].position.y;
        if(seleccionF2==true)
          environment.children[114].act();
      }
    else if(id===178)
      {
        X=environment.children[115].position.x;
        Y=environment.children[115].position.y;
        if(seleccionF2==true)
          environment.children[115].act();
      }
  }
  else
  {
    if(id===182)
      {
        X=environment.children[116].position.x;
        Y=environment.children[116].position.y;
        if(seleccionF2==true)
          environment.children[116].act();
      }
    else if(id===186)
      {
        X=environment.children[117].position.x;
        Y=environment.children[117].position.y;
        if(seleccionF2==true)
          environment.children[117].act();
      }
    else if(id===190)
      {
        X=environment.children[118].position.x;
        Y=environment.children[118].position.y;
        if(seleccionF2==true)
          environment.children[118].act();
      }
    else if(id===194)
      {
        X=environment.children[119].position.x;
        Y=environment.children[119].position.y;
        if(seleccionF2==true)
          environment.children[119].act();
      }
    else if(id===198)
      {
        X=environment.children[120].position.x;
        Y=environment.children[120].position.y;
        if(seleccionF2==true)
          environment.children[120].act();
      }
    else if(id===202)
      {
        X=environment.children[121].position.x;
        Y=environment.children[121].position.y;
        if(seleccionF2==true)
          environment.children[121].act();
      }
    else if(id===206)
      {
        X=environment.children[122].position.x;
        Y=environment.children[122].position.y;
        if(seleccionF2==true)
          environment.children[122].act();
      }
    else if(id===210)
      {
        X=environment.children[123].position.x;
        Y=environment.children[123].position.y;
        if(seleccionF2==true)
          environment.children[123].act();
      }
    else if(id===214)
      {
        X=environment.children[124].position.x;
        Y=environment.children[124].position.y;
        if(seleccionF2==true)
          environment.children[124].act();
      }
    else if(id===219)
      {
        X=environment.children[125].position.x;
        Y=environment.children[125].position.y;
        if(seleccionF2==true)
          environment.children[125].act();
      }
    else if(id===223)
      {
        X=environment.children[126].position.x;
        Y=environment.children[126].position.y;
        if(seleccionF2==true)
          environment.children[126].act();
      }
    else if(id===228)
      {
        X=environment.children[127].position.x;
        Y=environment.children[127].position.y;
        if(seleccionF2==true)
          environment.children[127].act();
      }
    else if(id===233)
      {
        X=environment.children[128].position.x;
        Y=environment.children[128].position.y;
        if(seleccionF2==true)
          environment.children[128].act();
      }
    else if(id===237)
      {
        X=environment.children[129].position.x;
        Y=environment.children[129].position.y;
        if(seleccionF2==true)
          environment.children[129].act();
      }
    else if(id===242)
      {
        X=environment.children[130].position.x;
        Y=environment.children[130].position.y;
        if(seleccionF2==true)
          environment.children[130].act();
      }
     else if(id===246)
      {
        X=environment.children[131].position.x;
        Y=environment.children[131].position.y;
        if(seleccionF2==true)
          environment.children[131].act();
      }
  }
  
  renderizador.render(environment,camara);

}


var turno=Math.round(Math.random());
var sTP,sTC,id,environment,camara,renderizador,luzpuntual,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();
