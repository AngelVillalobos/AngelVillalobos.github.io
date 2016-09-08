var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;

var BaseMalla=new THREE.Mesh(new THREE.BoxGeometry(100,100,0.3),new THREE.MeshBasicMaterial({color:0x412a09}));
var CasillaB=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.03),new THREE.MeshBasicMaterial({color:0xffffff}));

baseMalla.rotateX(Math.PI/4);





var escena = new THREE.Scene();
escena.add(BaseMalla);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

