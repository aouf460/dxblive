import React from 'react'
import "./Threejs.scss"
import * as THREE from "three";
function Threejs() {
    /*
three.js - Parallax Skybox
*/
"use strict";

const img_base = "https://threejs.org/examples/textures/kandao3.jpg";
//let img_base = "https://happy358.github.io/Images/HDR/sunny_vondelpark_4k.jpg";
const img_depth = "https://threejs.org/examples/textures/kandao3_depthmap.jpg";

/*
// for debug
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
let controls;
*/
(function () {
  let camera, scene, renderer, skybox;
  let height = 0;

  init();
  animate();

  function init() {
    const container = document.getElementById("container");

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);

    const light = new THREE.AmbientLight(0xffffff, 3.3);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      10
    );
    //camera.position.z = 3;// for debug
    scene.add(camera);

    // Create the panoramic sphere geometery
    const panoSphereGeo = new THREE.SphereGeometry(8, 256, 256);

    // Create the panoramic sphere material
    const panoSphereMat = new THREE.MeshStandardMaterial({
      side: THREE.BackSide,
      displacementScale: -4.0
    });

    // Create the panoramic sphere mesh
    skybox = new THREE.Mesh(panoSphereGeo, panoSphereMat);

    // Load and assign the texture and depth map
    const manager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(manager);

    loader.load(img_base, function (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      skybox.material.map = texture;
    });

    loader.load(img_depth, function (depth) {
      depth.minFilter = THREE.NearestFilter;
      depth.generateMipmaps = false;
      skybox.material.displacementMap = depth;
    });

    // On load complete add the panoramic sphere to the scene
    manager.onLoad = function () {
      scene.add(skybox);
    };

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.useLegacyLights = false;


    container.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize);

    height = document.body.clientHeight;
    height -= window.innerHeight;
    window.addEventListener("scroll", scrollAction);
  }
  function scrollAction() {
    let scrollAmount = window.pageYOffset;
    scrollAmount = scrollAmount / height;
    scrollAmount *= Math.PI * 2;
    skybox.rotation.y = scrollAmount;

    skybox.position.y = Math.sin(scrollAmount * 2);
    skybox.position.x = Math.sin(scrollAmount * 2) * 2;
  }
  function onWindowResize() {
    height = document.body.clientHeight;
    height -= window.innerHeight;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    //controls.update();
    render();
  }

  function render() {
    renderer.render(scene, camera);
  }
})();

  return (
<div>
    <div id="container"></div>

<section>
  <div>
    <h1>Parallax Skybox</h1>
    <p> - three.js - </p>
    <p id='arrow'>&raquo;</p>
  </div>
</section>
<section>
  <div id="info">
    <h2>Reference & Texture</h2>
    <p><a href="https://threejs.org/examples/#webxr_vr_panorama_depth" target="_blank" rel="noopener">three.js - panorama with depth</a>
      Created by <a href="https://orfleisher.com" target="_blank" rel="noopener">@juniorxsound</a>.</p>
    <p> Panorama from <a href="https://krpano.com/examples/?depthmap" target="_blank" rel="noopener">krpano</a>.</p>
    <div class="sample_wrap">
      <div class="sample_img">
        <p>Panorama image</p>
        <img src="https://threejs.org/examples/textures/kandao3.jpg" class="img" />
      </div>
      <div class="sample_img">
        <p>Depth map</p>
        <img src="https://threejs.org/examples/textures/kandao3_depthmap.jpg" class="img" />
      </div>
    </div>
  </div>
</section>
<section>
  <p>@wakana-k</p>
</section>

</div>
  )
}

export default Threejs