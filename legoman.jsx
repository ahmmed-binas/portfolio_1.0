import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

// Floating cube component
function FloatingBox() {
  const ref = useRef();
  // Floating animation + slow rotation
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2; // up/down
    ref.current.rotation.y = clock.getElapsedTime() * 0.3; // slow rotation
  });

  return (
    <Box ref={ref} args={[1, 1, 1]}>
      <meshStandardMaterial color="orange" />
    </Box>
  );
}

export default function ThreeExample() {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-[200px] h-[200px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <FloatingBox />
        </Suspense>

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
