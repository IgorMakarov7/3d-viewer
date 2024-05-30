import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
} from "@react-three/drei";

function App() {
  const { nodes, materials } = useGLTF("/earth.gltf");

  return (
    <Canvas camera={{ position: [5, 0, 0], fov: 50 }} style={{position: "absolute", width: "100%", height: "100%"}}>
      <ambientLight intensity={0.5} />
      <group>
        <mesh
          geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
          material={materials.Lampd_Ice}
        />
        <mesh
          geometry={nodes["URF-Height_watr_0"].geometry}
          material={materials.watr}
          material-roughness={0}
        />
        <mesh
          geometry={nodes["URF-Height_Lampd_0"].geometry}
          material={materials.Lampd}
          material-color="lightgreen"
        ></mesh>
      </group>
      <Environment preset="city" />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
