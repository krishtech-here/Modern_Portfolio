import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { FloatingShape } from './FloatingShape';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        
        {/* Floating shapes */}
        <FloatingShape position={[-2, 1, 0]} color="#8B5CF6" shape="box" speed={0.8} />
        <FloatingShape position={[2, -1, -1]} color="#06B6D4" shape="sphere" speed={1.2} />
        <FloatingShape position={[0, 2, -2]} color="#EF4444" shape="torus" speed={1.5} />
        <FloatingShape position={[-1, -2, 1]} color="#10B981" shape="sphere" speed={0.9} />
        <FloatingShape position={[3, 0, 0]} color="#F59E0B" shape="box" speed={1.1} />
        
        {/* Environment lighting */}
        <Environment preset="sunset" />
        
        {/* Controls for interaction */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};