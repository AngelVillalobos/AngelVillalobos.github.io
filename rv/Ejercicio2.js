var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
  camara.position.z=10;
var renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
var forma1=new THREE.SphereGeometry(1.3,32,32);
var material1=new THREE.MeshNormalMaterial();
var esfera=new THREE.Mesh(forma1,material1);
var forma2=new THREE.CylinderGeometry(0.5,0.5,3,64);
var material2=new THREE.MeshNormalMaterial();
var cilindro=new THREE.Mesh(forma2,material2);
cilindro.rotateX(-Math.PI/8);
esfera.position.set(0,1,0);
cilindro.position.set(0,-1,0);
escena.add(esfera)
escena.add(cilindro)
renderizador.render(escena,camara)
