var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;

var escena = new THREE.Scene();

var BaseMalla=new THREE.Mesh(new THREE.BoxGeometry(100,100,0.3),new THREE.MeshBasicMaterial({color:0x412a09}));
var CasillaB=new Array();

for (var i=0;i<33; i ++)
  {
      var CasillaB[i]=new THREE.Mesh(new THREE.BoxGeometry(10,10,0.03),new THREE.MeshBasicMaterial({color:0xffffff}));
      CasillaB[i].rotateX=(-Math.PI/4);
      CasillaB[i].translate(i*2,i*2,0.3);
      
  }

escena.add(CasillaB);

BaseMalla.rotateX(-Math.PI/4);

escena.add(BaseMalla);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

