var arco1 = new THREE.Shape();
var arco2 = new THREE.Shape();
var arco3 = new THREE.Shape();
var arco4 = new THREE.Shape();
//
arco1.absarc(0,0,0.5,Math.PI/18,Math.PI*(4/9),false);
arco1.absarc(0,0,0.35,Math.PI*(4/9),Math.PI/18,true);
arco2.absarc(0,0,0.5,Math.PI*(5/9),Math.PI*(17/18),false);
arco2.absarc(0,0,0.35,Math.PI*(17/18),Math.PI*(5/9),true);
arco3.absarc(0,0,0.5,Math.PI*(19/18),Math.PI*(13/9),false);
arco3.absarc(0,0,0.35,Math.PI*(13/9),Math.PI*(19/18),true);
arco4.absarc(0,0,0.5,Math.PI*(14/9),Math.PI*(35/18),false);
arco4.absarc(0,0,0.35,Math.PI*(35/18),Math.PI*(14/9),true);

//var forma1 = new THREE.ShapeGeometry(arco1);
//var malla1 = new THREE.Mesh(forma1);
//var forma2 = new THREE.ShapeGeometry(arco2);
//var malla2 = new THREE.Mesh(forma2);
//var forma3 = new THREE.ShapeGeometry(arco3);
//var malla3 = new THREE.Mesh(forma3);
//var forma4 = new THREE.ShapeGeometry(arco4);
//var malla4 = new THREE.Mesh(forma4);

var forma1 = new THREE.ExtrudeGeometry(arco1,{steps:500,amount:0.01,bevelEnabled:true,bevelSegments:500,bevelSize:0.7,bevelThickness:0.7});
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh(forma1,material1);

//var forma2 = new THREE.ExtrudeGeometry(arco2,{steps:500,amount:0.01,bevelEnabled:true,bevelSegments:500,bevelSize:0.7,bevelThickness:0.7});
//var material2 = new THREE.MeshNormalMaterial();
//var malla2 = new THREE.Mesh(forma2,material2);

//var forma3 = new THREE.ExtrudeGeometry(arco3,{steps:500,amount:0.01,bevelEnabled:true,bevelSegments:500,bevelSize:0.7,bevelThickness:0.7});
//var material3 = new THREE.MeshNormalMaterial();
//var malla3 = new THREE.Mesh(forma3,material3);

//var forma4 = new THREE.ExtrudeGeometry(arco4,{steps:500,amount:0.01,bevelEnabled:true,bevelSegments:500,bevelSize:0.7,bevelThickness:0.7});
//var material4 = new THREE.MeshNormalMaterial();
//var malla4 = new THREE.Mesh(forma4,material4);
//
//malla1.rotateX(Math.PI/6);
//malla2.rotateX(Math.PI/6);
//malla3.rotateX(Math.PI/6);
//malla4.rotateX(Math.PI/6);
var escena = new THREE.Scene();
escena.add(malla1);
//escena.add(malla2);
//escena.add(malla3);
//escena.add(malla4);
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
