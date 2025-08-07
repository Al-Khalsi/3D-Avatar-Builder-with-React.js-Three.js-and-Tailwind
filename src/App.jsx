import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MainLayout } from "./layout/MainLayout";
import Avatar from "./components/Avatar";

function App() {
  return (
    <MainLayout>
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }} className="z-0">
        <color attach="background" args={["#333333"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Avatar />
      </Canvas>
    </MainLayout>
  );
}

export default App;