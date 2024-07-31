import styled from "styled-components";
import {useEffect, useRef} from "react";

interface BackgroundVideoProps {
    src: string;
}

export default function BackgroundVideo({src}: BackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [src]);

    return (
        <Background ref={videoRef} muted loop autoPlay>
            <source src={src} type={"video/mp4"}/>
        </Background>
    )
}

const Background = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    filter: brightness(.7);
`