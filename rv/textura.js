var textura=new Object();

textura.retrollamada=function(textura)
{
  var material=new THREE.MeshBasicMaterial({map:textura});
  textura.malla=new THREE.Mesh(new THREE.SphereGeometry(1),material);
  textura.escena.add(textura.malla);
}

textura.setup=function()
{
  textura.escena=new THREE.Scene();
  var cargador=new THREE.TextureLoader();
  cargador.load("tierra.jpg",textura.retrollamada);
  textura.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  textura.camara.position.z=5;
  var lienzo=document.getElementById("ejemplo-textura");
  textura.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialiaas:true});
  textura.renderizador.setSize(600,600);
}
textura.loop=function()
{
  requestAnimationFrame(textura.loop);
  if(textura.malla!==undefined)
  {
    textura.malla.rotateX(0.01);
    textura.malla.rotateY(0.01);
  }
  textura.renderizador.render(textura.escena,textura.camara);
}
textura.setup();
textura.loop();
