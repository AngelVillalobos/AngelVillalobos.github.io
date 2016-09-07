var campoVision = 45;
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

camara.position.z = 15;

var BaseForma = new THREE.BoxGeometry(1,30,30,10,10,10);

var BaseMaterial = new THREE.MeshBasicMaterial({color:412a09});

var BaseFinal = new THREE.Mesh(BaseForma,BaseMaterial);

BaseFinal.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(BaseFinalMalla);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
