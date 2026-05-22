
import { useEffect,useRef } from "react";

const Hero = () => {
    const videoRef = useRef();
    useEffect(() =>
    {
        if(videoRef.current){
            videoRef.current.playbackRate =5;
        }
    },[])
  return (
    <section id="hero">
        <div>
            <h1>Macbook hero</h1>
            <img src="/title.png" alt="MacBook title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
        <button>Buy Now</button>
        <p>Experience the power of the new MacBook.</p>
    </section>
  )
}

export default Hero