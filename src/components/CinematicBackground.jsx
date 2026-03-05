import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const { viewport } = useThree();
  
  const particles = useMemo(() => {
    const temp = [];
    const colors = [];
    const color = new THREE.Color();
    
    for (let i = 0; i < 3000; i++) {
      // Create a spherical distribution
      const r = 10 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp.push(x, y, z);
      
      // Add colors
      const hue = (Math.random() * 0.2 + 0.8) % 1.0; // Gold to pink range
      color.setHSL(hue, 0.8, 0.6);
      colors.push(color.r, color.g, color.b);
    }
    
    return {
      positions: new Float32Array(temp),
      colors: new Float32Array(colors)
    };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0002;
      ref.current.rotation.y += 0.0005;
      
      // Pulse effect
      const time = state.clock.elapsedTime;
      ref.current.material.size = 0.1 + Math.sin(time * 2) * 0.05;
    }
  });

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

function FloatingSphere() {
  const sphereRef = useRef();
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 3;
      sphereRef.current.position.x = Math.cos(clock.elapsedTime * 0.2) * 2;
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[2, 0, -5]}>
      <meshPhongMaterial
        color="#ff6b6b"
        emissive="#4a1a1a"
        wireframe
        transparent
        opacity={0.4}
      />
    </Sphere>
  );
}

function CentralLight() {
  const lightRef = useRef();
  
  useFrame(({ clock }) => {
    if (lightRef.current) {
      lightRef.current.intensity = 0.5 + Math.sin(clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <pointLight ref={lightRef} position={[0, 0, 2]} color="#ffd700" intensity={0.8} />
  );
}

export const CinematicBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'radial-gradient(circle at 30% 30%, #2a1a3a, #0a0a1a, #000)'
    }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <CentralLight />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#4ecdc4" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#ff6b6b" />
        
        <ParticleField />
        <FloatingSphere />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};