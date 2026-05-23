import clsx from "clsx";
import { useMacbookStore } from "../store"
import {Canvas} from "@react-three/fiber";
import MackbookModel14 from "./models/Macbook-14";
import {OrbitControls} from "@react-three/drei";
import StudioLights from "./three/studioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

 

const ProductViewer = () => {
    const {color,scale,setColor,setScale} = useMacbookStore();
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });
  return (
    <section id="product-viewer">
        <h1>Take a closer look.</h1>
        <div className="controls">
            <p className="info">MacbookPro is now availabel in 14" and 16" variants with colors of space black and dark black</p>
            <div className="flex-center gap-4 mt-4">
                <div className="color-control">
                    <div onClick={() => setColor('#adb5bd')} className={clsx('bg-neutral-300', color === "#adb5bd" && 'active')}></div>
                    <div onClick={() => setColor('#2e2c2e')} className={clsx('bg-neutral-900', color === "#2e2c2e" && 'active')}></div>
                </div>

                <div className="size-control">
                    <div onClick={() => setScale(0.06)} className={clsx( scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>14"</p></div>
                    <div onClick={() => setScale(0.08)} className={clsx( scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>16"</p></div>
                </div>
            </div>
        </div>
        <Canvas id="canvas" camera={{position: [0,2,5], fov: 50, near: 0.1,far: 100}}>
            <StudioLights/>
            <ModelSwitcher scale={isMobile ? scale -0.03 : scale} isMobile = {isMobile}/>

        </Canvas>
    </section>
  )
}

export default ProductViewer