var forma=new THREE.SphereGeometry(1);
var material=new THREE.MeshBasicMaterial({color:0x0ff00});
var malla=new THREE.Mesh(forma,material);

var escena=new THREE.Scene();
escena.add(malla);

var camara=new.THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador=new THREE.WebGLRenderer();

//var lienzo = document.getElementById("basicMaterial");
//var renderizador = new THREE.WebGLRenderer({canvas: lienzo,antialias: true});

renderizador.setSize(600,600);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

