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
///////////////AGENTE///////////////
function Agent(x=0,y=0)
{
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
  /*this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.brazoizq=new THREE.Mesh(new THREE.BoxGeometry(5,1,1));
  this.brazoder=new THREE.Mesh(new THREE.BoxGeometry(5,1,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1));
  this.add(this.brazoizq,this.brazoder,this.piernaizq,this.piernader,cuerpo);
  this.piernaizq.position.z=2.5;
  this.piernaizq.position.y=-5;
  this.piernaizq.position.x=-1.8;
  this.piernader.position.x=1.8;
  this.piernader.position.z=2.5;
  this.piernader.position.y=-5;
  
  this.brazoizq.position.z=2.5;
  this.brazoizq.position.y=2;
  this.brazoizq.position.x=-2.5;
  this.brazoder.position.x=2.5;
  this.brazoder.position.z=2.5;
  this.brazoder.position.y=2;
  cuerpo.position.z=2.5;
  cuerpo.rotateZ(Math.PI/2);*/
}
Agent.prototype=new THREE.Object3D();

Agent.prototype.sense=function(environment){};
Agent.prototype.plan=function(environment){};
Agent.prototype.act=function(environment)
{
  var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Agent.prototype.operations={};

Agent.prototype.operations.goStraightX=function(pieza,distance)
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

Agent.prototype.operations.goStraightY=function(pieza,distance)
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

Agent.prototype.operations.goDiagonal=function(pieza,distance)
{
  if(distance===undefined)
   {
    if(Y<y&&X<x){
      distance=0.5;
      pieza.position.x+=distance*Math.cos(pieza.rotation.z);
      pieza.position.y+=distance*Math.cos(pieza.rotation.z);
    }
     else if(Y<y&&X>x){
      distance=0.5;
      pieza.position.x-=distance*Math.cos(pieza.rotation.z);
      pieza.position.y+=distance*Math.cos(pieza.rotation.z);
     }
     else if(Y>y&&X<x){
      distance=0.5;
      pieza.position.x+=distance*Math.cos(pieza.rotation.z);
      pieza.position.y-=distance*Math.cos(pieza.rotation.z);
     }
     else if(Y>y&&X>x){
      distance=0.5;
      pieza.position.x-=distance*Math.cos(pieza.rotation.z);
      pieza.position.y-=distance*Math.cos(pieza.rotation.z);
     }
    else if(Y===y)
      distance=0;
    else
      distance=-0.5; 
  }
};

Agent.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

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
        this.add(new Caballo(true,(j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="C")
      {
        this.add(new Caballo(false,(j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="p")
      {
        this.add(new Peon(true,(j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="P")
      {
        this.add(new Peon(false,(j*10)-45,(i*10)-45));
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
function Caballo(sTP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.sTP = sTP;
  if(this.sTP===true)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=4;
  this.cnt = 0;
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
  if( ((Math.abs(x-X)<=20 && Math.abs(y-Y)<=10) || (Math.abs(x-X)<=10 && Math.abs(y-Y)<=20)) && Math.abs(x-X)!==Math.abs(y-Y) ){
    if(X!==x&&Y!==y){
      this.actuator.commands.push('goStraightX');
      this.cnt = 1;}
    else if (X===X&&Y!==y&&this.cnt!==0)
      this.actuator.commands.push('goStraightY');
  }
  else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      this.cnt = 0;
      seleccionF2=false;
      seleccionF1=false;
    }
};

Caballo.prototype.operations.rotateCCW=function(pieza,angle)
{
  if(angle===undefined)
    angle=Math.PI/2;
  pieza.rotation.z+=angle;
};
///////////////PEON///////////////
function Peon(sTP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.sTP = sTP;
  if(this.sTP===true)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.x=x;
  this.position.y=y;
  this.position.z=4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  //this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(5,8,5),new THREE.MeshLambertMaterial({map:textura}));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,1,15));
  //this.brazoizq=new THREE.Mesh(new THREE.BoxGeometry(8,5,5)),new THREE.MeshLambertMaterial({map:textura});
  //this.brazoder=new THREE.Mesh(new THREE.BoxGeometry(8,5,5),new THREE.MeshLambertMaterial({map:textura}));
  //this.piernaizq.position.set(-5,10,2.5)
  this.piernader.position.set(2,0,-1);
  //this.piernader.rotateX(Math.PI/2);
  /*this.piernaizq.position.z=2.5;
  this.piernaizq.position.y=10;
  this.piernaizq.position.x=-5;
  this.piernader.position.x=5;
  this.piernader.position.z=2.5;
  this.piernader.position.y=10;
  
  this.brazoizq.position.z=2.5;
  this.brazoizq.position.y=2;
  this.brazoizq.position.x=-2.5;
  this.brazoder.position.x=2.5;
  this.brazoder.position.z=2.5;
  this.brazoder.position.y=2;*/
  
  this.add(/*this.brazoizq,this.brazoder,this.piernaizq,*/this.piernader,this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
  //PB(this.actuator);
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
  if (this.sTP===true){
    if(Y>=-25 && Y<-15) {
      if( y-Y<=20 && y-Y>0 && x===X ) 
        this.actuator.commands.push('goStraightY');
    }
    else{ 
      if(y-Y<=10 && y-Y>0 && x===X)
        this.actuator.commands.push('goStraightY');
    }
  }
  else{
    if(Y<=25 && Y>15) {
      if( Y-y<=20 && Y-y>0 && x===X ) 
        this.actuator.commands.push('goStraightY');
    }
    else{ 
      if(Y-y<=10 && Y-y>0 && x===X)
        this.actuator.commands.push('goStraightY');
    }
  }
  if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
  //}
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
     /*console.log(turno);
      if(turno===1)
        turno=0;
      else
        turno=1;*/
    console.log(environment.children[101]);
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
    
    if(X===x&&Y===y)
    {
      turno=!turno
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
  Piezas[1]="    c     ";
  Piezas[2]="          ";
  Piezas[3]="          ";
  Piezas[4]="          ";
  Piezas[5]="          ";
  Piezas[6]="          ";
  Piezas[7]="          ";
  Piezas[8]="    P     ";
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
  //120 -90
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
  if(turno==false)
  {
    switch(id){
      case 111:
        X=environment.children[100].position.x;
        Y=environment.children[100].position.y;
        if(seleccionF2==true){
          environment.children[100].piernader.rotateX(0.05);
          environment.children[100].act();}
      break;
      case 1100:
        X=environment.children[101].position.x;
        Y=environment.children[101].position.y;
        if(seleccionF2==true)
          environment.children[101].act();
      break;
    }
  }
  else
  {
    switch(id){
      case 115:
        X=environment.children[101].position.x;
        Y=environment.children[101].position.y;
        if(seleccionF2==true)
          environment.children[101].act(); 
      break;
      case 1000:
        X=environment.children[103].position.x;
        Y=environment.children[103].position.y;
        if(seleccionF2==true)
          environment.children[103].act();
      break;
      
    }
  }   
  renderizador.render(environment,camara);
}

var turno=false,sTC,id,environment,camara,renderizador,luzpuntual,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();
