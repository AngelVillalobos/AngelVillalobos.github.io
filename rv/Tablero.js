var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=15;

var BaseMalla=new THREE.Mesh(new THREE.BoxGeometry(100,100,0.3),new THREE.MeshBasicMaterial({color:0x412a09}))

var BaseFinal = new THREE.Geometry();

BaseFinal.merge(BaseMalla.geometry,BaseMalla.matrix);


var escena = new THREE.Scene();
escena.add(BaseFinal);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

