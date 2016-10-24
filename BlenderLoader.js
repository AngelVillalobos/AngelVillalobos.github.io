  var escena = new THREE.Scene();
  var camara = new THREE.PerspectiveCamera();
  var renderizador = new THREE.WebGLRenderer();
  var luzPuntual=new THREE.AmbientLight(0xFFFFFF);

  init();
  animate();

  var MaterialCuerpo=new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture('TexturaCuerpoRey.png')});
  //var MaterialCabeza=new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture('TexturaCabezaRey.png')});

  
  
  Cargador=new THREE.JSONLoader();
  Cargador.load('CuerpoRey.js',function(geometry){
  Cuerpo=new THREE.Mesh(geometry,MaterialCuerpo);
  Cuerpo.scale.set(5,5,5);
  //Cuerpo.rotateY(Math.PI/6);
  Cuerpo.position.set(0,0,0);
    escena.add(Cuerpo)
  });
/*  
  Cargador.load('CabezaRey.js',function(geometry){
  Cabeza=new THREE.Mesh(geometry,MaterialCabeza);
  Cabeza.scale.set(5,5,5);
  //Cuerpo.rotateY(Math.PI/6);
  Cabeza.position.set(0,-15,0);
  });
 */ 
  var Rey=new THREE.Geometry();
  


function init()
{
  camara.position.z=100;
  luzPuntual.position.x=50;
  luzPuntual.position.y=-50;
  luzPuntual.position.z=50;
  escena.add(luzPuntual);
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
;
}  
function animate()
{
  requestAnimationFrame(animate);
  renderizador.render(escena,camara);
}





