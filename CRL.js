AJEDREZ.CRL=function()
{
  /////CAMARA////
  var campoVision=45;
  var relacionAspecto=window.innerWidth/window.innerHeight;
  var planoCercano=1;
  var planoLejano=1000;
  AJEDREZ.camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
  AJEDREZ.camara.position.z=120;
  AJEDREZ.camara.position.y=-90;
  AJEDREZ.camara.lookAt(new THREE.Vector3(0,0,0));
  /////RENDERIZADOR////
  AJEDREZ.renderizador = new THREE.WebGLRenderer();
  AJEDREZ.renderizador.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(AJEDREZ.renderizador.domElement);
  AJEDREZ.renderizador.shadowMapEnabled=true;
  /////LUZ////
  AJEDREZ.luzPuntual=new THREE.PointLight(0xFFFFFF,1.2);
  AJEDREZ.luzPuntual.position.x=150;
  AJEDREZ.luzPuntual.position.y=-150;
  AJEDREZ.luzPuntual.position.z=150;
  AJEDREZ.luzPuntual.castShadow=true;
}
