"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Desk() {
  return (
    <group position={[0, -1.5, 0]}>
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[6, 0.15, 3]} />
        <meshStandardMaterial color="#d4a574" roughness={0.6} />
      </mesh>
      <mesh position={[-2.5, -0.85, -1]} castShadow>
        <boxGeometry args={[0.15, 1.5, 0.15]} />
        <meshStandardMaterial color="#c4956a" roughness={0.7} />
      </mesh>
      <mesh position={[2.5, -0.85, -1]} castShadow>
        <boxGeometry args={[0.15, 1.5, 0.15]} />
        <meshStandardMaterial color="#c4956a" roughness={0.7} />
      </mesh>
      <mesh position={[-2.5, -0.85, 1]} castShadow>
        <boxGeometry args={[0.15, 1.5, 0.15]} />
        <meshStandardMaterial color="#c4956a" roughness={0.7} />
      </mesh>
      <mesh position={[2.5, -0.85, 1]} castShadow>
        <boxGeometry args={[0.15, 1.5, 0.15]} />
        <meshStandardMaterial color="#c4956a" roughness={0.7} />
      </mesh>
    </group>
  );
}

function Monitor({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation || [0, 0, 0]}>
      <mesh position={[0, 0.9, 0]} castShadow>
        <boxGeometry args={[2, 1.3, 0.08]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.5} />
      </mesh>
      <mesh position={[0, 0.9, 0.05]}>
        <boxGeometry args={[1.85, 1.15, 0.01]} />
        <meshStandardMaterial color="#0f0f23" emissive="#1a1a3e" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.15, 0.1]}>
        <boxGeometry args={[0.5, 0.12, 0.3]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.06, 0.1]}>
        <boxGeometry args={[0.8, 0.06, 0.5]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, -1.35, 0.8]}>
      <mesh castShadow>
        <boxGeometry args={[1.6, 0.06, 0.5]} />
        <meshStandardMaterial color="#2d2d3f" roughness={0.5} metalness={0.3} />
      </mesh>
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[-0.66 + col * 0.12, 0.04, -0.16 + row * 0.12]}
          >
            <boxGeometry args={[0.09, 0.03, 0.09]} />
            <meshStandardMaterial
              color={row === 0 && col === 0 ? "#6366f1" : "#3d3d4f"}
              emissive={row === 0 && col === 0 ? "#6366f1" : "#000000"}
              emissiveIntensity={row === 0 && col === 0 ? 0.3 : 0}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

function Mouse() {
  return (
    <group position={[1.5, -1.35, 0.8]}>
      <mesh castShadow>
        <boxGeometry args={[0.18, 0.04, 0.3]} />
        <meshStandardMaterial color="#3d3d4f" roughness={0.3} metalness={0.4} />
      </mesh>
    </group>
  );
}

function Plant() {
  return (
    <group position={[-2.2, -1.2, 0.3]}>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 0.25, 8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      {[
        [0, 0.3, 0],
        [0.08, 0.4, 0.05],
        [-0.06, 0.38, -0.04],
        [0.03, 0.45, -0.02],
        [-0.05, 0.42, 0.06],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <sphereGeometry args={[0.08 + Math.random() * 0.04, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#22c55e" : "#16a34a"}
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeMug() {
  return (
    <group position={[2.0, -1.2, 0.5]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.09, 0.2, 16]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.4} />
      </mesh>
      <mesh position={[0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.4} />
      </mesh>
    </group>
  );
}

function FloatingOrb({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    const t = state.clock.elapsedTime;

    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    meshRef.current.rotation.y = t * 0.3;
    meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.2;

    meshRef.current.position.y = 1.5 + Math.sin(t * 0.8) * 0.3;
    meshRef.current.position.x = mouseRef.current.x * 0.5;
    meshRef.current.position.z = mouseRef.current.y * 0.3;

    materialRef.current.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, 1.5, 0]} castShadow>
      <icosahedronGeometry args={[0.4, 1]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </mesh>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6366f1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function DeskScene({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-3, 2, 2]} intensity={0.5} color="#818cf8" />
      <pointLight position={[3, 2, -2]} intensity={0.3} color="#a78bfa" />

      <Desk />
      <Monitor position={[0, -1.5, -0.5]} />
      <Monitor position={[-1.8, -1.5, 0]} rotation={[0, 0.4, 0]} />
      <Monitor position={[1.8, -1.5, 0]} rotation={[0, -0.4, 0]} />
      <Keyboard />
      <Mouse />
      <Plant />
      <CoffeeMug />
      <FloatingOrb mouseRef={mouseRef} />
      <Particles />
    </group>
  );
}
