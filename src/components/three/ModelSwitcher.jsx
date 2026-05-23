import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ModelSwitcher = ({scale , isMobile}) => {
    
    const ANIMATION_DURATION = 1;
    const OFFSET_DISTANCE = 9;
    
    const fadeMesh = (group, opacity) => {
        
        if(!group) return;
        group.traverse((child) => {
            if(child.mesh){
                child.material.transparent = true;
                gsap.to(child.material, {opacity ,duration: ANIMATION_DURATION})
            }
        })
    }
    
    const moveGroup= (group,x) => {
        if(!group) return;
        gsap.to(group.position, {x,duration:ANIMATION_DURATION})
    }
    const LargeMacbookRef = useRef();
    const SmallMacbookRef = useRef();
    
    const showLargeMacbook = scale === 0.08  || scale === 0.05

    useGSAP(() => {
        if(showLargeMacbook){
            moveGroup(SmallMacbookRef.current,-OFFSET_DISTANCE);
            moveGroup(LargeMacbookRef.current , 0);
    
            fadeMesh(SmallMacbookRef.current, 0);
            fadeMesh(LargeMacbookRef.current, 1);
        }else{
            moveGroup(LargeMacbookRef.current,OFFSET_DISTANCE);
            moveGroup(SmallMacbookRef.current , 0);
    
            fadeMesh(LargeMacbookRef.current, 0);
            fadeMesh(SmallMacbookRef.current, 1);
        }
        
    },[scale])

    const controlsConfig = {
        snap: true,
        speed:1,
        zoom: 1,
        azimuth:[-Infinity,Infinity],
        polar:[-Math.PI ,Math.PI]

    }

    return (
        <>
        <PresentationControls {...controlsConfig} >
            <group ref={LargeMacbookRef} >
                <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
            </group>
        </PresentationControls>
        <PresentationControls {...controlsConfig}>
            <group ref={SmallMacbookRef} >
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
            </group>
        </PresentationControls>
        </>
    );
}
export default ModelSwitcher;