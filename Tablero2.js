var campoVision=45;
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=100;
var planoLejano=1000;

var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);

camara.position.z=150;
//camara.position.y=-100;
//camara.position.x=150;

camara.lookAt(new THREE.Vector3(0,0,0));

var FCasillaB=new THREE.BoxGeometry(10,10,0.03,10,10,10);
var MCasillaB=new THREE.MeshBasicMaterial({color:0xffffff});
var FTablero=new THREE.BoxGeometry(100,100,0.3,10,10,10);
var MTablero=new THREE.MeshBasicMaterial({color:0x412a09});
var FCasillaG=new THREE.BoxGeometry(10,10,0.03,10,10,10);
var MCasillaG=new THREE.MeshBasicMaterial({color:0x6b6b6b});
var Tablero=new THREE.Mesh(FTablero,MTablero);

var CasillaB=new Array();
var CasillaG=new Array();
var Torres=new Array();

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
 
var material = new THREE.MeshNormalMaterial();//({color:0x00ff00,wireframe:true});
var TorrefMalla = new THREE.Mesh(TorrefForma,material);
for (var i=0;i<4;i++)
{
  Torres[i]=new THREE.Mesh(TorrefForma,material);
  Torres[i].rotateX(Math.PI/2);
  Torres[i].scale.set(7,7,8);
  Torres[i].position.set(i,i+1,1.2);
  escena.add(Torres[i]);
}

//0xebe89a
  
  //escena.add(Torres[i]);
  //Torres[1].translate(-4,3,1.2);
  //escena.add(Torres[1]);


///////////////////////////////////////////////////////////////////////////////////////

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
