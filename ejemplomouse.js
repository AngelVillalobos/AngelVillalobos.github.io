 var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        renderer.setClearColor( 0xcccccc, 1 ); 
        document.body.appendChild( renderer.domElement );
        scene.add(camera);

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -5,  5, 0 ),
            new THREE.Vector3( -5, -5, 0 ),
            new THREE.Vector3(  5, -5, 0 )
        );
        var face = new THREE.Face3(0, 1, 2);
        geometry.faces.push(face);
        var material = new THREE.MeshBasicMaterial({color: 0x3300ff});
        var triangle = new THREE.Mesh(geometry, material);
        scene.add(triangle);

        camera.position.z = 10;

        document.addEventListener( 'mousedown', onDocumentMouseDown );

        function onDocumentMouseDown( event ) {    
            event.preventDefault();
            var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   
                                    -( event.clientY / window.innerHeight ) * 2 + 1,  
                                    0.5 );     
            var raycaster =  new THREE.Raycaster();                                        
            raycaster.setFromCamera( mouse3D, camera );
            var intersects = raycaster.intersectObjects( objects );

            if ( intersects.length > 0 ) {
                intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
            }
        }

        var render = function () {
            requestAnimationFrame( render );
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
        };

        render();
