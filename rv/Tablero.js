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
var MCasillaG=new THREE.MeshBasicMaterial({color:0x6b6b6b});
var Tablero=new THREE.Mesh(FTablero,MTablero);

var CasillaB=new Array();
var CasillaG=new Array();

var Casillas = new THREE.Geometry();

var escena = new THREE.Scene();

var a=1;
var b=0;
var c=1;

for (var i=0;i<71; i ++)
  {
      CasillaB[i]=new THREE.Mesh(FCasillaB,MCasillaB);
      CasillaG[i]=new THREE.Mesh(FCasillaG,MCasillaG);
  }
for (var j=0;j<71; j ++)
  {
    if(j%2==0)
      {
        CasillaG[j].position.set((c*10)-45,(b*10)-(35),0.6-(b*0.5));
        CasillaG[j].rotateX(-Math.PI/6);
        escena.add(CasillaG[j]);
        a=a+1;
      }
    else
      {
        CasillaB[j].position.set((c*10)-45,(b*10)-(35),0.6-(b*0.5));
        CasillaB[j].rotateX(-Math.PI/6);
        escena.add(CasillaB[j]);
        a=a+1;
      }
  if(a==9)
    {
      a=1;
      b=b+1;
      c=0;
      j=j+1;
    }
    c=c+1;
  }

var material = new THREE.MeshBasicMaterial({color:0x6b6b6b});
var CasillasFinal = new THREE.Mesh(Casillas,material);

Tablero.rotateX(-Math.PI/6);
escena.add(Tablero);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

