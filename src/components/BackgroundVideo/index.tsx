import {Background} from "./style.ts";

interface BackgroundVideoProps {
    src: string;
}

export default function BackgroundVideo({src}: BackgroundVideoProps) {
    return (
        <Background muted loop autoPlay>
            <source src={src} type={"video/mp4"}/>
        </Background>
    )
}