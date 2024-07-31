import styled from "styled-components";
import rain from "assets/icons/rain.svg";
import HorizontalDivider from "components/Divider/Horizontal.tsx";

export default function VerticalForecast() {
    return (
        <Container>
            <span>09:00</span>
            <HorizontalDivider/>
            <SVGContainer>
                <img src={rain} alt={"rainy"} width={24} height={24}/>
            </SVGContainer>
            <Temperature>10&deg;C</Temperature>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 50px;
    background-color: rgba(158, 158, 158, 0.3);
    border-radius: 8px;
    gap: 5px;

    & > span {
        color: white;
        font-size: 14px;
    }
`

const SVGContainer = styled.div`
    display: flex;
    width: 38px;
    height: 38px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.4);
`

const Temperature = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`