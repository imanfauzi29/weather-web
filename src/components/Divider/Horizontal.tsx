import styled from "styled-components";

type Props = {
    width?: string
}
export default function HorizontalDivider({width}: Props) {
    return <HorizontalLine width={width}/>
}

type HorizontalLineType = {
    width?: string
}
export const HorizontalLine = styled.div<HorizontalLineType>`
    display: block;
    height: 1px;
    width: ${props => props.width || "100%"};
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0 10px;
`