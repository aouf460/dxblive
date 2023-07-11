import React, { useEffect, useRef } from 'react';
import "./Threejs.scss";
import * as THREE from "three";

function Threejs() {
  const containerRef = useRef(null);
  const rendererContainerRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, skybox;
    let height = 0;

    init();
    animate();

    function init() {
      const container = containerRef.current;
      const rendererContainer = rendererContainerRef.current;
      if (!container || !rendererContainer) return;

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
      scene.add(camera);

      const panoSphereGeo = new THREE.SphereGeometry(8, 256, 256);
      const panoSphereMat = new THREE.MeshStandardMaterial({
        side: THREE.BackSide,
        displacementScale: -4.0
      });
      skybox = new THREE.Mesh(panoSphereGeo, panoSphereMat);

      const img_base = "https://threejs.org/examples/textures/kandao3.jpg";
      const img_depth = "https://threejs.org/examples/textures/kandao3_depthmap.jpg";

      const manager = new THREE.LoadingManager();
      const loader = new THREE.TextureLoader(manager);

      loader.load(img_base, function (texture) {
        texture.encoding = THREE.sRGBEncoding;
        skybox.material.map = texture;
        skybox.material.needsUpdate = true;
      });

      loader.load(img_depth, function (depth) {
        depth.minFilter = THREE.NearestFilter;
        depth.generateMipmaps = false;
        skybox.material.displacementMap = depth;
        skybox.material.needsUpdate = true;
      });

      manager.onLoad = function () {
        scene.add(skybox);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererContainer.appendChild(renderer.domElement);
        height = document.body.clientHeight;
        height -= window.innerHeight;
        window.addEventListener("scroll", scrollAction);
      };
    }

    function scrollAction() {
      let scrollAmount = window.pageYOffset;
      scrollAmount = scrollAmount / height;
      scrollAmount *= Math.PI * 2;
      skybox.rotation.y = scrollAmount;

      skybox.position.y = Math.sin(scrollAmount * 2);
      skybox.position.x = Math.sin(scrollAmount * 2) * 2;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      if (renderer) {
        renderer.render(scene, camera);
      }
    }

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
<div>
    <div ref={containerRef} id="container">
      <div ref={rendererContainerRef} />
    </div>
<section>
  <div>
    <h1>ThreeJs Panoramic background</h1>
    <p> - three.js - </p>
  </div>
</section>
<section>
  <div id="info">
    <h2>My Fisrt ThreeJs Project</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className="sample_wrap">
      <div className="sample_img">
        <p>Panorama image</p>
        <img src="https://threejs.org/examples/textures/kandao3.jpg" className="img" />
      </div>
      <div className="sample_img">
        <p>Depth map</p>
        <img src="https://threejs.org/examples/textures/kandao3_depthmap.jpg" className="img" />
      </div>
    </div>
  </div>
</section>
<section>
  <p>@Aouf.dev</p>
</section>

</div>
  )
}

export default Threejs