
AJEDREZ.TorresBlancas=new Array();
AJEDREZ.TorresNegras=new Array();

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
    AJEDREZ.escena.add(AJEDREZ.TorresNegras[i]);
  }
  AJEDREZ.TorresNegras[1].position.set(-35,35,1.2);
  AJEDREZ.TorresNegras[2].position.set(35,35,1.2);
}
////////////////////////////////////////////////////////////////////

AJEDREZ.setupTorres=function()
{
  AJEDREZ.cargadorTorre=new THREE.TextureLoader(); 
  AJEDREZ.cargadorTorre.load("maderaB.jpg",AJEDREZ.RetrollamadaTorreBlanca);  
  AJEDREZ.cargadorTorre.load("maderaN.jpg",AJEDREZ.RetrollamadaTorreNegra);  
}
