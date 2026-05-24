import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="Lights">
      {/* ── Environment: cinematic reflections via lightformers on all sides ── */}
      <Environment resolution={256}>
        <group>
          {/* === FRONT === */}
          {/* Large key softbox — front-right, warm tint */}
          <Lightformer
            form="rect"
            intensity={2}
            position={[4, 3, 5]}
            scale={[6, 4, 1]}
            rotation-y={-Math.PI / 5}
            color="#ffe8d6"
          />
          {/* Fill softbox — front-left, cooler for contrast */}
          <Lightformer
            form="rect"
            intensity={1.2}
            position={[-4, 2, 5]}
            scale={[5, 3, 1]}
            rotation-y={Math.PI / 5}
            color="#d6e8ff"
          />

          {/* === BACK — very strong to illuminate rear of lid === */}
          {/* Massive back wall — wide, bright, ensures lid is visible */}
          <Lightformer
            form="rect"
            intensity={8}
            position={[0, 2, -5]}
            scale={[20, 8, 1]}
            rotation-y={Math.PI}
            color="#ffffff"
          />
          {/* Back-top — catches the top edge of the lid from behind */}
          <Lightformer
            form="rect"
            intensity={5}
            position={[0, 6, -4]}
            scale={[14, 4, 1]}
            rotation-y={Math.PI}
            color="#f0f0ff"
          />
          {/* Back-left accent — strong asymmetric depth */}
          <Lightformer
            form="rect"
            intensity={4}
            position={[-5, 2, -4]}
            scale={[5, 5, 1]}
            rotation-y={Math.PI * 0.75}
            color="#c8d8ff"
          />
          {/* Back-right accent */}
          <Lightformer
            form="rect"
            intensity={4}
            position={[5, 2, -4]}
            scale={[5, 5, 1]}
            rotation-y={-Math.PI * 0.75}
            color="#ffd6c8"
          />
          {/* Back-center low — fills the lower back area */}
          <Lightformer
            form="rect"
            intensity={3}
            position={[0, -1, -5]}
            scale={[16, 4, 1]}
            rotation-y={Math.PI}
            color="#e8e8ff"
          />

          {/* === TOP — overhead softbox like a studio ceiling === */}
          <Lightformer
            form="rect"
            intensity={1}
            position={[0, 8, 0]}
            scale={[10, 1, 10]}
            rotation-x={Math.PI / 2}
            color="#f0e6ff"
          />

          {/* === BOTTOM — crucial for illuminating underside === */}
          {/* Large floor bounce — wide & soft */}
          <Lightformer
            form="rect"
            intensity={1.2}
            position={[0, -4, 0]}
            scale={[14, 1, 14]}
            rotation-x={-Math.PI / 2}
            color="#e8e0d4"
          />
          {/* Front-bottom fill — catches the front lip/edge */}
          <Lightformer
            form="rect"
            intensity={0.8}
            position={[0, -3, 3]}
            scale={[8, 1, 4]}
            rotation-x={-Math.PI / 3}
            color="#ffe8d6"
          />
          {/* Back-bottom fill — illuminates hinge area from below */}
          <Lightformer
            form="rect"
            intensity={0.8}
            position={[0, -3, -3]}
            scale={[8, 1, 4]}
            rotation-x={Math.PI / 3}
            color="#d6e8ff"
          />

          {/* === SIDES — kicker lights for wrap-around === */}
          {/* Left side kicker */}
          <Lightformer
            form="rect"
            intensity={1}
            position={[-7, 1, 0]}
            scale={[1, 4, 6]}
            rotation-y={Math.PI / 2}
            color="#d6e8ff"
          />
          {/* Right side kicker */}
          <Lightformer
            form="rect"
            intensity={1}
            position={[7, 1, 0]}
            scale={[1, 4, 6]}
            rotation-y={-Math.PI / 2}
            color="#ffe0c8"
          />
        </group>
      </Environment>

      {/* ── Direct lights for crisp specular highlights ── */}

      {/* Key light — front-right, warm, main specular driver */}
      <spotLight
        position={[5, 5, 5]}
        angle={0.5}
        penumbra={0.8}
        decay={0}
        intensity={Math.PI * 0.35}
        color="#ffe8d6"
        castShadow
      />

      {/* Fill light — front-left, cooler, softer */}
      <spotLight
        position={[-5, 4, 5]}
        angle={0.5}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color="#d6e8ff"
      />

      {/* Rim light — behind, very strong for back visibility */}
      <spotLight
        position={[0, 5, -6]}
        angle={0.9}
        penumbra={0.6}
        decay={0}
        intensity={Math.PI * 1.5}
        color="#ffffff"
      />

      {/* Back-left kicker — cinematic edge on left side */}
      <spotLight
        position={[-5, 3, -5]}
        angle={0.7}
        penumbra={0.7}
        decay={0}
        intensity={Math.PI * 0.5}
        color="#c8d8ff"
      />

      {/* Back-right kicker — cinematic edge on right side */}
      <spotLight
        position={[5, 3, -5]}
        angle={0.7}
        penumbra={0.7}
        decay={0}
        intensity={Math.PI * 0.5}
        color="#ffd6c8"
      />

      {/* Dedicated back directional — illuminates back surfaces directly */}
      <directionalLight
        position={[0, 3, -8]}
        intensity={Math.PI * 0.6}
        color="#ffffff"
      />

      {/* Low back fill — catches the bottom of the back lid */}
      <spotLight
        position={[0, -1, -6]}
        angle={0.8}
        penumbra={0.8}
        decay={0}
        intensity={Math.PI * 0.4}
        color="#e8e8ff"
      />

      {/* Bottom fill — point light below to illuminate underside */}
      <pointLight
        position={[0, -3, 0]}
        intensity={Math.PI * 0.15}
        color="#e8e0d4"
        decay={0}
      />

      {/* Hair light — directly above for top-down highlight on lid */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.6}
        penumbra={0.9}
        decay={0}
        intensity={Math.PI * 0.12}
        color="#f0e6ff"
        target-position={[0, 0, 0]}
      />

      {/* Ambient fill — high enough so no angle goes fully dark */}
      <ambientLight intensity={0.35} color="#d0cce0" />
    </group>
  );
};

export default StudioLights;