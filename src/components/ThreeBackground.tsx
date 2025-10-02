import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  currentPage: number;
  scrollY: number;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ currentPage, scrollY }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Particle system parameters based on current page
  const particleParams = useMemo(() => {
    const params = {
      0: { count: 1000, chaos: 0.3, speed: 0.001, size: 2, color: '#8A4FFF' }, // Home - calm
      1: { count: 1500, chaos: 0.8, speed: 0.003, size: 3, color: '#F5B851' }, // Problem - chaotic
      2: { count: 1200, chaos: 0.1, speed: 0.002, size: 2.5, color: '#8A4FFF' }, // Solution - harmonious
      3: { count: 1000, chaos: 0.2, speed: 0.0015, size: 2, color: '#F5B851' }, // How it works - organized
      4: { count: 800, chaos: 0.05, speed: 0.001, size: 2, color: '#8A4FFF' }, // Features - logo formation
    };
    return params[currentPage as keyof typeof params] || params[0];
  }, [currentPage]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Particle system
    const particleCount = particleParams.count;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color = new THREE.Color(particleParams.color);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions in a sphere
      const radius = 30 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = particleParams.size + Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: particleParams.size,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const time = Date.now() * particleParams.speed;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Add subtle movement based on current page
          if (currentPage === 4) {
            // Logo formation - particles move towards center
            const targetX = 0;
            const targetY = 0;
            const targetZ = 0;
            
            positions[i3] += (targetX - positions[i3]) * 0.01;
            positions[i3 + 1] += (targetY - positions[i3 + 1]) * 0.01;
            positions[i3 + 2] += (targetZ - positions[i3 + 2]) * 0.01;
          } else {
            // Normal chaotic movement
            positions[i3] += Math.sin(time + i) * particleParams.chaos * 0.1;
            positions[i3 + 1] += Math.cos(time + i) * particleParams.chaos * 0.1;
            positions[i3 + 2] += Math.sin(time + i * 0.5) * particleParams.chaos * 0.1;
          }

          // Mouse interaction
          const distanceFromMouse = Math.sqrt(
            Math.pow(positions[i3] - mouseRef.current.x * 50, 2) +
            Math.pow(positions[i3 + 1] - mouseRef.current.y * 50, 2)
          );

          if (distanceFromMouse < 20) {
            positions[i3] += (mouseRef.current.x * 50 - positions[i3]) * 0.02;
            positions[i3 + 1] += (mouseRef.current.y * 50 - positions[i3 + 1]) * 0.02;
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Camera movement
      camera.position.x += (mouseRef.current.x * 10 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 10 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [currentPage, particleParams]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeBackground;
