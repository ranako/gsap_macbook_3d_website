import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="Lights">
      {/* ── Environment: soft reflections & ambient fill via lightformers ── */}
      <Environment resolution={256}>
        <group>
          {/* Large key softbox — front-right, warm tint */}
          <Lightformer
            form="rect"
            intensity={1.5}
            position={[4, 4, 3]}
            scale={[5, 3, 1]}
            rotation-y={-Math.PI / 4}
            color="#ffe8d6"
          />
          {/* Fill softbox — front-left, cooler to add contrast */}
          <Lightformer
            form="rect"
            intensity={0.8}
            position={[-5, 3, 3]}
            scale={[4, 2, 1]}
            rotation-y={Math.PI / 4}
            color="#d6e8ff"
          />
          {/* Rim / back light — behind the model for edge separation */}
          <Lightformer
            form="rect"
            intensity={2}
            position={[0, 3, -5]}
            scale={[8, 3, 1]}
            rotation-y={Math.PI}
            color="#ffffff"
          />
          {/* Top accent strip — subtle highlight on lid & keyboard deck */}
          <Lightformer
            form="rect"
            intensity={0.6}
            position={[0, 8, 0]}
            scale={[6, 1, 6]}
            rotation-x={Math.PI / 2}
            color="#f0e6ff"
          />
          {/* Floor bounce — faint upward fill to soften shadows underneath */}
          <Lightformer
            form="rect"
            intensity={0.3}
            position={[0, -3, 0]}
            scale={[10, 1, 10]}
            rotation-x={-Math.PI / 2}
            color="#e8e0d4"
          />
        </group>
      </Environment>

      {/* ── Direct lights for crisp specular highlights ── */}

      {/* Key light — 45° front-right, slightly above */}
      <spotLight
        position={[5, 5, 4]}
        angle={0.4}
        penumbra={0.8}
        decay={0}
        intensity={Math.PI * 0.2}
        color="#ffe8d6"
        castShadow
      />

      {/* Fill light — front-left, softer to keep shadow detail */}
      <spotLight
        position={[-5, 4, 4]}
        angle={0.5}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.1}
        color="#d6e8ff"
      />

      {/* Rim light — behind, kicks bright edge on the silhouette */}
      <spotLight
        position={[0, 4, -5]}
        angle={0.6}
        penumbra={0.6}
        decay={0}
        intensity={Math.PI * 0.15}
        color="#ffffff"
      />

      {/* Subtle ambient to fill absolute blacks */}
      <ambientLight intensity={0.05} color="#c8c0d8" />
    </group>
  );
};

export default StudioLights;