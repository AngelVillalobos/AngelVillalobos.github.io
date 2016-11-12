
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
  this.receiveShadow=true;
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
        Casilla=new CasillaBlanca(10,(i*10)-45,(j*10)-45);
        //Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="b")
      {
        Casilla=new CasillaNegra(10,(i*10)-45,(j*10)-45);
        //Casilla.receiveShadow=true;
        this.add(Casilla);
      }
      else if(map[i][j]==="B")
      {
        CBorde=new Borde(10,(i*10)-45,(j*10)-45);
        //CBorde.receiveShadow=true;
        this.add(CBorde);
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
  Agent.call(this,x,y);
  cargador=new THREE.TextureLoader();
  textura=cargador.load('maderaN.jpg');
  this.castShadow=true;
  this.position.x=x;
  this.position.y=y;
  this.position.z=0.4;
  this.sensor=new Sensor();
  this.actuator=new THREE.Mesh(new PeonGeometry(),new THREE.MeshLambertMaterial({map:textura}));
  //this.actuator=new THREE.Mesh(new PeonGeometry(),new THREE.MeshBasicMaterial({color:0xffffff}));
  this.add(this.actuator);
  this.actuator.scale.set(7,7,8);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castshadow=true;
  
  //document.addEventListener( 'click', onDocumentMouseDown, false );
}
Peon.prototype=new Agent();

/*Peon.prototype.sense=function(environment)
{
  this.sensor.set(this.position,new THREE.Vector3(1,0,0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if((obstaculo.length>0 && (obstaculo[0].distance<=3)))
    this.sensor.colision=true;
  else
    this.sensor.colision=false;
};
Peon.prototype.plan=function(environment)
{
  //this.actuator.commands=[];
  if(this.sensor.colision==true)
    avance=0;
  else
    avance=0.4;
};
*/
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

function onDocumentMouseDown( event ) {    
            event.preventDefault();
            var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   
                                    -( event.clientY / window.innerHeight ) * 2 + 1,  
                                    0.5 );     
            var raycaster =  new THREE.Raycaster();                                        
            raycaster.setFromCamera( mouse3D, camara );
            var intersects = raycaster.intersectObjects( environment.children,true );

            if ( intersects.length > 0 ) {
                intersects[ 0 ].object.material.color.setHex( 0x00ff00 );

                
                //console.log(W);                     
            }
            intersects[ 0 ].object.material.color.setHex( 0xff00ff );
        }




function setup()
{
  document.documentElement.style.overflow = 'hidden';
  var Peon=new Array();
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
  Piezas[2]="          ";
  Piezas[3]="          ";
  Piezas[4]="          ";
  Piezas[5]="          ";
  Piezas[6]="          ";
  Piezas[7]="  p       ";
  Piezas[8]="          ";
  Piezas[9]="          ";
     
  environment=new Environment();
  environment.setMapCasilla(tablero);
  environment.setMapPiezas(Piezas);
  
  document.addEventListener('keydown',Teclado,false);
  document.addEventListener( 'click', onDocumentMouseDown );
  
  //var c = environment.children;
  //console.log(c);
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
  renderizador.shadowMap.enabled=true;
  /////LUZ////
  luzPuntual=new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=50;
  luzPuntual.position.y=-50;
  luzPuntual.position.z=50;
  luzPuntual.castShadow=true;
  environment.add(camara);
  environment.add(luzPuntual); 
  //environment.add(Peon);
}
function loop()
{
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  renderizador.render(environment,camara);
}



var environment,camara,renderizador,luzpuntual,avance;

setup();
loop();
