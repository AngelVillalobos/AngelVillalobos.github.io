var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
  camara.position.z=9;
var renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
var forma1=new THREE.SphereGeometry(0.8,32,32);
var material1=new THREE.MeshNormalMaterial();
var esfera=new THREE.Mesh(forma1,material1);
var forma2=new THREE.CylinderGeometry(0.8,0.8,32,5);
var material2=new THREE.MeshNormalMaterial();
var cilindro=new THREE.Mesh(forma2,material2);
cilindro.rotateY(Math.PI/4);
escena.add(esfera)
escena.add(cilindro)
renderizador.render(escena,camara)
