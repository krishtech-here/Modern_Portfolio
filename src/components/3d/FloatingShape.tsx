import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'box' | 'sphere' | 'torus';
  speed?: number;
}

export const FloatingShape = ({ position, color, shape, speed = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
      case 'sphere':
        return <sphereGeometry args={[0.3, 16, 16]} />;
      case 'torus':
        return <torusGeometry args={[0.3, 0.1, 8, 16]} />;
      default:
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderShape()}
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};