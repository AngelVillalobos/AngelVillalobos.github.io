var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
  camara.position.z=5;
var renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
var forma1=new THREE.SphereGeometry(0.5,32,32);
var material1=new THREE.MeshNormalMaterial();
var esfera=new THREE.Mesh(forma1,material1);
escena.add(esfera)
renderizador.render(escena,camara)
