var BaseForma = new THREE.CylinderGeometry(0.5,0.5,0.15,64,64);
var Base2Forma = new THREE.TorusGeometry(0.35,0.1,30,200);
var Base3Forma = new THREE.TorusGeometry(0.2,0.07,30,200);
var TorreForma = new THREE.CylinderGeometry(0.2,0.4,1.5,64,64);
var Corona3Forma = new THREE.SphereGeometry(0.1,32,32,6,6.3,6,6.3);
var Puntos = [];
for (var i=-4;i<10;i++)
{
	Puntos.push(new THREE.Vector2(Math.cos(i*0.2)*0.2+0.1,(i-0.1)*0.05));
}
var Corona1Forma=new THREE.LatheGeometry(Puntos);

Corona1Forma.translate(0,1,0);
Corona3Forma.translate(0,-1.5,0);
TorreForma.translate(0,0.375,0);
Base2Forma.translate(0,0,-0.08);
Base3Forma.translate(0,0,-0.7);

Corona1Forma.rotateY(Math.PI);
Corona3Forma.rotateX(Math.PI);
Base3Forma.rotateX(Math.PI/2);
Base2Forma.rotateX(Math.PI/2);

var BaseMalla = new THREE.Mesh(BaseForma);
var Base2Malla = new THREE.Mesh(Base2Forma);
var Base3Malla = new THREE.Mesh(Base3Forma);
var TorreMalla = new THREE.Mesh(TorreForma);
var Corona3Malla = new THREE.Mesh(Corona3Forma);
var Corona1Malla = new THREE.Mesh(Corona1Forma);

var TorrefForma = new THREE.Geometry();

TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
TorrefForma.merge(Base2Malla.geometry,Base2Malla.matrix);
TorrefForma.merge(Base3Malla.geometry,Base3Malla.matrix);
TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
TorrefForma.merge(Corona3Malla.geometry,Corona3Malla.matrix);
TorrefForma.merge(Corona1Malla.geometry,Corona1Malla.matrix);



TorrefForma.translate(0,-0.6,0);

var material = new THREE.MeshNormalMaterial();
var TorrefMalla = new THREE.Mesh(TorrefForma,material);
TorrefMalla.rotateX(Math.PI/12);





//lathe.position.y=15
var escena = new THREE.Scene();
escena.add(TorrefMalla);


var camara = new THREE.PerspectiveCamera();
camara.position.z=3;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
