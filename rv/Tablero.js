var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;

var FCasillaB=new THREE.BoxGeometry(10,10,0.03);
var MCasillaB=new THREE.MeshBasicMaterial({color:0xffffff});
var FTablero=new THREE.BoxGeometry(100,100,0.3);
var MTablero=new THREE.MeshBasicMaterial({color:0x412a09});
var FCasillaG=new THREE.BoxGeometry(10,10,0.03);
var MCasillaG=new THREE.MeshBasicMaterial({color:0xaaaaaa});
var Tablero=new THREE.Mesh(FTablero,MTablero);

var CasillaB=new Array();
var CasillaG=new Array();

var escena = new THREE.Scene();

for (var i=0;i<33; i ++)
  {
      CasillaB[i]=new THREE.Mesh(FCasillaB,MCasillaB);
      CasillaG[i]=new THREE.Mesh(FCasillaG,MCasillaG);
  }

for (var i=0;i<33; i ++)
  {
      for (var j=0;j<33; j ++)
        {
          CasillaB[i].position.set(i,j,1);
          CasillaG[i].position.set(-j,-i,1);
          escena.add(CasillaB[i]);
          escena.add(CasillaG[i]);
        }
  }
//escena.add(Tablero);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

