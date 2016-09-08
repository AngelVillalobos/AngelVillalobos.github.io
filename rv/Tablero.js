var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;

var BaseMalla=new THREE.Mesh(new THREE.BoxGeometry(100,100,0.3),new THREE.MeshBasicMaterial({color:0x412a09}));
var Casilla1=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.03),new THREE.MeshBasicMaterial({color:0xffffff}));

var BaseFinal = new THREE.Geometry();

BaseFinal.merge(BaseMalla.geometry,BaseMalla.matrix);
BaseFinal.merge(Casilla1.geometry,Casilla1.matrix);


var BaseMaterial = new THREE.MeshNormalMaterial();
var BaseF = new THREE.Mesh(BaseFinal,BaseMaterial);
//TorrefMalla.rotateX(Math.PI/12);
var escena = new THREE.Scene();
escena.add(BaseF);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

