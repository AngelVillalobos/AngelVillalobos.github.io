var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=15;

var Base=new THREE.Mesh(new THREE.BoxGeometry(10,10,1),new THREE.MeshBasicMaterial({color:0x412a09}));
//Base.rotateX(Math.PI/2);

var escena = new THREE.Scene();
escena.add(Base);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
