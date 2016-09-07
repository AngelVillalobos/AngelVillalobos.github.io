var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=15;

var Base=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.3),new THREE.MeshBasicMaterial({color:0x412a09}));
var CA1=new THREE.Mesh(new THREE.BoxGeometry(0.625,0.625,0.05),new THREE.MeshBasicMaterial({color:0xffffff}));

Base.rotateX(-Math.PI/3);
CA1.rotateX(-Math.PI/3);

CA1.position.y=0.2;
CA1.position.x=-4.375;
CA1.position.z=0;

var escena = new THREE.Scene();
escena.add(Base);
escena.add(CA1);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
