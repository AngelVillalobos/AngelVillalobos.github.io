var forma=new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(-1,1,1),
                    new THREE.Vector3(-1,1,-1),
                    new THREE.Vector3(1,1,-1),
                    new THREE.Vector3(1,1,1),
                    new THREE.Vector3(-1,-1,1),
                    new THREE.Vector3(-1,-1,-1),
                    new THREE.Vector3(1,-1,-1),
                    new THREE.Vector3(1,-1,1));

forma.faces.push(new THREE.Face3(0,2,1),
                new THREE.Face3(0,3,2),
                new THREE.Face3(0,4,3),
                new THREE.Face3(4,7,3),
                new THREE.Face3(7,4,5),
                new THREE.Face3(7,5,6),
                new THREE.Face3(6,5,2),
                new THREE.Face3(6,1,2),
                new THREE.Face3(2,3,6),
                new THREE.Face3(2,7,6),
                new THREE.Face3(4,0,1),
                new THREE.Face3(4,1,5));

forma.computeBoundingSphere(); //¿¿¿Para qué funciona ésta esfera???

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
