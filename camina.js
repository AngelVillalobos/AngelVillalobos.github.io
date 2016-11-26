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
  var b,c;
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

  b=pieza.piernader.rotation.x*Math.pow(10, 1);
  b=Math.round(b);
  b= b/Math.pow(10,1);
  console.log(b);
  if(b===0.3)
    a=-0.05;
  else if(b===-0.3)
    a=0.05;
  pieza.piernader.rotation.x+=a;
  pieza.piernaizq.rotation.x+=-a;
  c=pieza.brazoder.rotation.z*Math.pow(10, 1);
  c=Math.round(c);
  c= c/Math.pow(10,1);
  console.log(c);
  if(c===0.3)
    d=-0.05;
  else if(c===-0.3)
    d=0.05;
  pieza.brazoder.rotation.z+=d;
  pieza.brazoizq.rotation.z+=d;
};

Agent.prototype.operations.goStraightY=function(pieza,distance)
{
  var b,c;
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
  
  b=pieza.piernader.rotation.x*Math.pow(10, 1);
  b=Math.round(b);
  b= b/Math.pow(10,1);
  if(b===0.3)
    a=-0.05;
  else if(b===-0.3)
    a=0.05;
  pieza.piernader.rotation.x+=a;
  pieza.piernaizq.rotation.x+=-a;
  c=pieza.brazoder.rotation.z*Math.pow(10, 1);
  c=Math.round(c);
  c= c/Math.pow(10,1);
  if(c===0.3)
    d=-0.05;
  else if(c===-0.3)
    d=0.05;
  pieza.brazoder.rotation.z+=d;
  pieza.brazoizq.rotation.z+=d;    
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
  b=pieza.piernader.rotation.x*Math.pow(10, 1);
  b=Math.round(b);
  b= b/Math.pow(10,1);
  console.log(b);
  if(b===0.3)
    a=-0.05;
  else if(b===-0.3)
    a=0.05;
  pieza.piernader.rotation.x+=a;
  pieza.piernaizq.rotation.x+=-a;
  c=pieza.brazoder.rotation.z*Math.pow(10, 1);
  c=Math.round(c);
  c= c/Math.pow(10,1);
  console.log(c);
  if(c===0.3)
    d=-0.05;
  else if(c===-0.3)
    d=0.05;
  pieza.brazoder.rotation.z+=d;
  pieza.brazoizq.rotation.z+=d;
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
      if(map[i][j]==="a")
      {
        this.add(new Alfil(true,(j*10)-45,(i*10)-45));
      }
      if(map[i][j]==="A")
      {
        this.add(new Alfil(false,(j*10)-45,(i*10)-45));
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

///////////////ALFIL///////////////
function Alfil(sTP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.sTP = sTP;
  if(this.sTP===true)
    textura=cargador.load('maderaN.jpg');
  else
    textura=cargador.load('maderaB.jpg');
  this.position.set(x,y,5);
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new AlfilGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  this.piernaizq=new THREE.Mesh(new THREE.BoxGeometry(1,1,8),new THREE.MeshLambertMaterial({map:textura}));
  this.piernader=new THREE.Mesh(new THREE.BoxGeometry(1,1,8),new THREE.MeshLambertMaterial({map:textura}));
  this.brazoizq=new THREE.Mesh(new THREE.BoxGeometry(5,1,1),new THREE.MeshLambertMaterial({map:textura}));
  this.brazoder=new THREE.Mesh(new THREE.BoxGeometry(5,1,1),new THREE.MeshLambertMaterial({map:textura}));
  this.piernaizq.position.set(-1.8,0,-1)
  this.piernader.position.set(1.8,0,-1);
  this.brazoder.position.set(2.5,0,4);
  this.brazoizq.position.set(-2.5,0,4);
  this.add(this.brazoizq,this.brazoder,this.piernaizq,this.piernader,this.actuator);
  this.actuator.scale.set(9.5,9.5,9.5);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
  this.piernader.castShadow=true;
  this.piernaizq.castShadow=true;
  this.brazoder.castShadow=true;
  this.brazoizq.castShadow=true;
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
    if(X!==x&&Y!==y&&Math.abs(y-Y)===Math.abs(x-X)){
      this.actuator.commands.push('goDiagonal');
    }
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
};

Alfil.prototype.operations.rotateCCW=function(pieza,angle)
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
    //console.log(environment.children[101]);
    //console.log(turno);
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
    //nsole.log(x);
    //console.log(y);
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
  
  /*var tablero=new Array();
  tablero[0]="          ";
  tablero[1]="          ";
  tablero[2]="          ";
  tablero[3]="          ";
  tablero[4]="          ";
  tablero[5]="          ";
  tablero[6]="          ";
  tablero[7]="          ";
  tablero[8]="          ";
  tablero[9]="          ";*/
  
  var Piezas=new Array();
  Piezas[0]="          ";
  Piezas[1]="          ";
  Piezas[2]="  a       ";
  Piezas[3]="          ";
  Piezas[4]="          ";
  Piezas[5]="          ";
  Piezas[6]="          ";
  Piezas[7]="       A  ";
  Piezas[8]="          ";
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
  //camara.position.z=120;
  camara.position.y=-50;
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
      case 109:
        X=environment.children[100].position.x;
        Y=environment.children[100].position.y;
        if(seleccionF2==true){
          
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
      case 117:
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

var b,c,a=d=0.01,turno=false,sTC,id,environment,camara,renderizador,luzpuntual,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();
