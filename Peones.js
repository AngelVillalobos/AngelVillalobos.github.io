AJEDREZ.PeonesBlancos=new Array();
AJEDREZ.PeonesNegros=new Array();

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
    AJEDREZ.escena.add(AJEDREZ.PeonesNegros[i]);
    AJEDREZ.PeonesNegros[i].position.set((a*10)-45,25,1.2);
    a=a+1;
  }
}
////////////////////////////////////////////////////////////////////

AJEDREZ.setupPeones=function()
{
  AJEDREZ.cargadorPeon=new THREE.TextureLoader(); 
  AJEDREZ.cargadorPeon.load("maderaB.jpg",AJEDREZ.RetrollamadaPeonBlanco);  
  AJEDREZ.cargadorPeon.load("maderaN.jpg",AJEDREZ.RetrollamadaPeonNegro);  
}
