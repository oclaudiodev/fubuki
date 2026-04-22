import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const RED = new THREE.Color("#CC0000");
    const RED_DARK = new THREE.Color("#550000");
    const WHITE = new THREE.Color("#ffffff");

    const PARTICLE_COUNT = 420;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const pColors = new Float32Array(PARTICLE_COUNT * 3);
    const pSpeeds = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 6 + Math.random() * 14;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 4;

      const mix = Math.random();
      const c = mix > 0.75 ? WHITE : mix > 0.4 ? RED : RED_DARK;
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
      pSpeeds.push((Math.random() - 0.5) * 0.003);
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const torusGeo = new THREE.TorusGeometry(5.2, 0.03, 8, 120);
    const torusMat = new THREE.MeshBasicMaterial({
      color: "#CC0000",
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < 6; i++) {
      const ring = new THREE.Mesh(torusGeo, torusMat.clone());
      ring.rotation.x = Math.PI / 2;
      ring.position.z = -4 + i * 1.6;
      ring.userData.phase = i * 0.5;
      ring.userData.speed = 0.004 + i * 0.001;
      ringGroup.add(ring);
    }

    const icoGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: "#CC0000",
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(5.5, 0, -2);
    scene.add(ico);

    const dodGeo = new THREE.DodecahedronGeometry(3.2, 0);
    const dodMat = new THREE.MeshBasicMaterial({
      color: "#880000",
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const dod = new THREE.Mesh(dodGeo, dodMat);
    dod.position.set(5.5, 0, -2);
    scene.add(dod);

    const gridHelper = new THREE.GridHelper(50, 30, "#1a0000", "#110000");
    gridHelper.position.y = -8;
    gridHelper.rotation.x = 0.05;
    scene.add(gridHelper);

    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    let frame;
    let t = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.01;

      const pos = pGeo.attributes.position.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3 + 1] += pSpeeds[i];
        if (pos[i * 3 + 1] > 18) pos[i * 3 + 1] = -18;
        if (pos[i * 3 + 1] < -18) pos[i * 3 + 1] = 18;
      }
      pGeo.attributes.position.needsUpdate = true;

      ringGroup.children.forEach((ring) => {
        ring.rotation.z = t * ring.userData.speed + ring.userData.phase;
        ring.material.opacity = 0.15 + 0.2 * Math.abs(Math.sin(t * 0.4 + ring.userData.phase));
      });
      ringGroup.rotation.y = t * 0.06;

      ico.rotation.x = t * 0.18;
      ico.rotation.y = t * 0.12;
      dod.rotation.x = -t * 0.09;
      dod.rotation.y = t * 0.15;

      const pulse = 1 + 0.04 * Math.sin(t * 1.2);
      ico.scale.setScalar(pulse);

      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 1.0 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
