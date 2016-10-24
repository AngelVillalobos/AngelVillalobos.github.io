  var escena = new THREE.Scene();
  var camara = new THREE.PerspectiveCamera();
  var renderizador = new THREE.WebGLRenderer();
  var luzPuntual=new THREE.PointLight(0xFFFFFF,10);

  init();
  animate();

function init()
{
  camara.position.z=40;
  luzPuntual.position.x=50;
  luzPuntual.position.y=-50;
  luzPuntual.position.z=50;
  escena.add(luzPuntual);

  var Material=new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture('TexturaCuerpoRey.png')});

  MODELO=new THREE.JSONLoader();
  MODELO.load('CuerpoRey.js',function(geometry){
  Modelo=new THREE.Mesh(geometry,Material);
  //escena.add(BaseAlMalla);
  Modelo.scale.set(5,5,5);
  Modelo.rotateY(Math.PI/6);
  Modelo.position.set(0,0,0);
  escena.add(Modelo);
  
  
});
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
}  
function animate()
{
  requestAnimationFrame(animate);
  renderizador.render(escena,camara);
}




