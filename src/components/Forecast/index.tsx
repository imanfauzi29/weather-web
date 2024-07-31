import VerticalDivider from "components/Divider/Vertical.tsx";
import rain from "assets/icons/rain.svg"
import styled from "styled-components";

export default function Forecast() {
    return (
        <Container>
            <SVGContainer>
                <img src={rain} alt={"rainy"} width={24} height={24}/>
            </SVGContainer>
            <WeatherInfo>
                <p>Friday, 23 april</p>
                <p>Heavy Rain</p>
            </WeatherInfo>
            <VerticalDivider height={"50%"}/>
            <WeatherInfoItem>
                <span>9&deg;</span>
                <span>19&deg;</span>
            </WeatherInfoItem>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
`

const SVGContainer = styled.div`
    display: flex;
    width: 38px;
    height: 38px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
`

const WeatherInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: white;
    gap: 5px;
    font-size: 14px;

    & > p:last-child {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
    }
`
const WeatherInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
`