var campoVision = 45;
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

camara.position.z = 15;

var BaseForma = new THREE.BoxGeometry(1,30,30,10,10,10);
BaseForma.translate( 0, 0, 0 );

var BaseMalla = new THREE.Mesh(BaseForma);

var BaseFinal = new THREE.Geometry();

BaseFinal.merge(BaseMalla.geometry,BaseMalla.matrix);

var material = new THREE.MeshBasicMaterial({color:0x412a09});
var BaseFinalMalla = new THREE.Mesh(BaseFinal,material);
//TorrefMalla.rotateX(Math.PI/12);
var escena = new THREE.Scene();
escena.add(BaseFinalMalla);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
