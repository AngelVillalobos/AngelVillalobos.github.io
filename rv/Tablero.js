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

var escena = new THREE.Scene();

var a=1;
/////////////////////////////////
for (var i=0;i<8; i ++)
  {
      CasillaB[i]=new THREE.Mesh(FCasillaB,MCasillaB);
      CasillaG[i]=new THREE.Mesh(FCasillaG,MCasillaG);
  }
for (var i=0;i<8; i ++)
  {
      //for (var j=0;j<32; j ++)
        //{
        switch(a)
        {
          case 1:
            if(i%2==0)
            {
              CasillaG[i].position.set((i*10)-50,0,1);
            }
            else
            {
              CasillaB[i].position.set((i*10)-50,0,1);
            }
            escena.add(CasillaB[i]);
            escena.add(CasillaG[i]);
            break;
            
            case 2:
            if(i%2==0)
            {
              CasillaG[i].position.set((i*10)-50,10,1);
            }
            else
            {
              CasillaB[i].position.set((i*10)-50,10,1);
            }
            escena.add(CasillaB[i]);
            escena.add(CasillaG[i]);
            break;
        }
        a=a+1;
        //}
        
  }

////////////////////////////////////////////////////
//escena.add(Tablero);
//
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

