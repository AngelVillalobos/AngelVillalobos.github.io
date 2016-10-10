var BaseAlForma = new THREE.CylinderGeometry(0.5,0.5,0.15,64,64);
var Base2AlForma = new THREE.TorusGeometry(0.35,0.1,30,200);
var Base3AlForma = new THREE.TorusGeometry(0.2,0.07,30,200);
var AlfilForma = new THREE.CylinderGeometry(0.2,0.4,1.2,64,64);
var Corona3AlForma = new THREE.SphereGeometry(0.08,32,32,6,6.3,6,6.3);
var Puntos = [];
for (var i=-4;i<10;i++)
{
	Puntos.push(new THREE.Vector2(Math.cos(i*0.2)*0.2+0.1,(i-0.1)*0.05));
}
var Corona1AlForma=new THREE.LatheGeometry(Puntos);

Corona1AlForma.translate(0,1.52,0);
Corona3AlForma.translate(0,-2,0);
AlfilForma.translate(0,0.675,0);
Base2AlForma.translate(0,0,-0.08);
Base3AlForma.translate(0,0,-1.25);

Corona1AlForma.rotateY(Math.PI);
Corona3AlForma.rotateX(Math.PI);
Base3AlForma.rotateX(Math.PI/2);
Base2AlForma.rotateX(Math.PI/2);

var BaseAlMalla = new THREE.Mesh(BaseAlForma);
var Base2AlMalla = new THREE.Mesh(Base2AlForma);
var Base3AlMalla = new THREE.Mesh(Base3AlForma);
var AlfilMalla = new THREE.Mesh(AlfilForma);
var Corona3AlMalla = new THREE.Mesh(Corona3AlForma);
var Corona1AlMalla = new THREE.Mesh(Corona1AlForma);

var AlfilfForma = new THREE.Geometry();

AlfilfForma.merge(BaseAlMalla.geometry,BaseAlMalla.matrix);
AlfilfForma.merge(Base2AlMalla.geometry,Base2AlMalla.matrix);
AlfilfForma.merge(Base3AlMalla.geometry,Base3AlMalla.matrix);
AlfilfForma.merge(AlfilMalla.geometry,AlfilMalla.matrix);
AlfilfForma.merge(Corona3AlMalla.geometry,Corona3AlMalla.matrix);
AlfilfForma.merge(Corona1AlMalla.geometry,Corona1AlMalla.matrix);



AlfilfForma.translate(0,-0.8,0);
var material = new THREE.MeshNormalMaterial();
var AlfilfMalla = new THREE.Mesh(AlfilfForma,material);
AlfilfMalla.rotateX(Math.PI/12);






//lathe.position.y=15
var escena = new THREE.Scene();
escena.add(AlfilfMalla);


var camara = new THREE.PerspectiveCamera();
camara.position.z=4;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
