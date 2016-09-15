var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;
camara.position.y=-100;


camara.lookAt(new THREE.Vector3(0,0,0));

var FCasillaB=new THREE.BoxGeometry(10,10,0.03,10,10,10);
var MCasillaB=new THREE.MeshLambertMaterial({color:0xffffff});
var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
var MTablero=new THREE.MeshLambertMaterial({color:0x412a09});
var FCasillaG=new THREE.BoxGeometry(10,10,0.03,10,10,10);
var MCasillaG=new THREE.MeshLambertMaterial({color:0x6b6b6b});
var Tablero=new THREE.Mesh(FTablero,MTablero);



var CasillaB=new Array();
var CasillaG=new Array();
var TorresB=new Array();
var TorresN=new Array();

var Casillas = new THREE.Geometry();

var escena = new THREE.Scene();

var a=1;
var b=0;
var c=1;

for (var i=0;i<71; i ++)
  {
      CasillaB[i]=new THREE.Mesh(FCasillaB,MCasillaB);
      CasillaB[i].receiveShadow=true;
      CasillaG[i]=new THREE.Mesh(FCasillaG,MCasillaG);
      CasillaG[i].receiveShadow=true;
  }
for (var j=0;j<71; j ++)
  {
    if(j%2==0)
      {
        CasillaG[j].position.set((c*10)-45,(b*10)-(35),0.6);
        escena.add(CasillaG[j]);
        a=a+1;
      }
    else
      {
        CasillaB[j].position.set((c*10)-45,(b*10)-(35),0.6);
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
Tablero.receiveShadow=true;
Tablero.position.set(0,0,0);
escena.add(Tablero);
///////////////////////////////////////////////////////////////////////////////////////
var BaseForma = new THREE.CylinderGeometry(0.6,0.6,0.2,64,64);
var Base2Forma = new THREE.TorusGeometry(0.4,0.1,30,200);
var Base3Forma = new THREE.TorusGeometry(0.3,0.1,30,200);
var TorreForma = new THREE.CylinderGeometry(0.3,0.4,1,64,64);
var CoronaForma = new THREE.CylinderGeometry(0.5,0.5,0.2,64,64);
var Corona1Forma = new THREE.TorusGeometry(0.4,0.1,30,200);
var Corona2Forma = new THREE.SphereGeometry(0.4,32,32,6,6.3,1.5,3);
var Corona3Forma = new THREE.SphereGeometry(0.1,32,32,6,6.3,6,6.3);

CoronaForma.translate(0,1.2,0);
Corona1Forma.translate(0,0,-1.3);
Corona2Forma.translate(0,-1.2,0);
Corona3Forma.translate(0,-1.6,0);
TorreForma.translate(0,0.6,0);
Base2Forma.translate(0,0,-0.1);
Base3Forma.translate(0,0,-1.1);

Corona1Forma.rotateX(Math.PI/2);
Corona2Forma.rotateX(Math.PI);
Corona3Forma.rotateX(Math.PI);
Base3Forma.rotateX(Math.PI/2);
Base2Forma.rotateX(Math.PI/2);

var BaseMalla = new THREE.Mesh(BaseForma);
var Base2Malla = new THREE.Mesh(Base2Forma);
var Base3Malla = new THREE.Mesh(Base3Forma);
var TorreMalla = new THREE.Mesh(TorreForma);
var CoronaMalla = new THREE.Mesh(CoronaForma);
var Corona1Malla = new THREE.Mesh(Corona1Forma);
var Corona2Malla = new THREE.Mesh(Corona2Forma);
var Corona3Malla = new THREE.Mesh(Corona3Forma);


var TorrefForma = new THREE.Geometry();

  TorrefForma.merge(BaseMalla.geometry,BaseMalla.matrix);
  TorrefForma.merge(Base2Malla.geometry,Base2Malla.matrix);
  TorrefForma.merge(Base3Malla.geometry,Base3Malla.matrix);
  TorrefForma.merge(TorreMalla.geometry,TorreMalla.matrix);
  TorrefForma.merge(CoronaMalla.geometry,CoronaMalla.matrix);
  TorrefForma.merge(Corona1Malla.geometry,Corona1Malla.matrix);
  TorrefForma.merge(Corona2Malla.geometry,Corona2Malla.matrix);
  TorrefForma.merge(Corona3Malla.geometry,Corona3Malla.matrix);
 
var material1 = new THREE.MeshLambertMaterial({color:0xffff99});
var material2 = new THREE.MeshLambertMaterial({color:0xe0e0e0});

for (var i=0;i<2;i++)
{
  TorresB[i]=new THREE.Mesh(TorrefForma,material1);
  TorresB[i].castShadow=true;
  TorresN[i]=new THREE.Mesh(TorrefForma,material2);
  TorresN[i].castShadow=true;
  TorresB[i].rotateX(Math.PI/2);
  TorresN[i].rotateX(Math.PI/2);
  TorresB[i].scale.set(7,7,8);
  TorresN[i].scale.set(7,7,8);
}
  
  TorresB[0].position.set(-35,-35,1.2);
  escena.add(TorresB[0]);
  TorresB[1].position.set(35,-35,1.2);
  escena.add(TorresB[1]);
  TorresN[0].position.set(-35,35,1.2);
  escena.add(TorresN[0]);
  TorresN[1].position.set(35,35,1.2);
  escena.add(TorresN[1]);


//0xebe89a


///////////////////////////////////////////////////////////////////////////////////////
var luzPuntual=new THREE.PointLight(0xFFFFFF,2);
luzPuntual.position.x=150;
luzPuntual.position.y=-150;
luzPuntual.position.z=150;

escena.add(luzPuntual);

///////////////////////////////////////////////////////////////////////////////////////

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.shadowMapEnabled=true;


luzPuntual.castShadow=true;
renderizador.render(escena,camara);
