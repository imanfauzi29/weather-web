import styled from "styled-components";

type Props = {
    height?: string
}

export default function VerticalDivider({height}: Props) {
    return <VerticalLine height={height}/>
}

type VerticalLineType = {
    height?: string
}
export const VerticalLine = styled.div<VerticalLineType>`
    display: block;
    width: 1px;
    height: ${props => props.height || "100%"};
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0 10px;
`