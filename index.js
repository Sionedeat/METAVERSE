import keyinput from "./Keyinput.js";
const ratio = window.innerWidth / window.innerHeight
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, ratio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const light = new THREE.AmbientLight("grey");
const dLight = new THREE.AmbientLight("grey",0.7);
light.add(dLight);
scene.add(light);
const geometry = new THREE.BoxGeometry(50,0.1,50);
const material = new THREE.MeshPhongMaterial( { color: "white" } );
const ground = new THREE.Mesh( geometry, material );
scene.add(ground);

camera.position.set(5,15,15);


const boxgeometry = new THREE.BoxGeometry(2,2,2);
const boxmaterial = new THREE.MeshPhongMaterial( { color: "blue" } );
const box = new THREE.Mesh( boxgeometry, boxmaterial );
box.position.set(- 2,2,2);
scene.add(box);


function animate() {
   requestAnimationFrame( animate );
   if(keyinput.isPressed(38)) {
       camera.position.y += 0.05;
       camera.position.x += 0.05;
   }
   if(keyinput.isPressed(40)) {
    camera.position.y -= 0.05;
    camera.position.x -= 0.05;
   }
   camera.lookAt(ground.position);
	renderer.render( scene, camera );
}
animate();



