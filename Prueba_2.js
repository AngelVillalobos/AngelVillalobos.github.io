var escena = new THREE.Scene();
escena.add(AlfilfMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=4;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
