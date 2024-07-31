import VerticalDivider from "components/Divider/Vertical.tsx";
import styled from "styled-components";
import {Forecastday} from "services/types/MarineType.ts";
import {useMemo} from "react";
import {formatDateTime} from "utils/formatDate.ts";
import {weatherIcon} from "utils/weatherIcon.ts";

export default function Forecast(props: { data: Forecastday }) {
    const {data} = props
    const {code, text} = data.day.condition
    const [d] = useMemo(() => formatDateTime(data.date), [data.date])

    console.log(weatherIcon[code], code)
    return (
        <Container>
            <SVGContainer>
                <img src={weatherIcon[code]} alt={text} width={24} height={24}/>
            </SVGContainer>
            <WeatherInfo>
                <p>{d}</p>
                <p>{text}</p>
            </WeatherInfo>
            <VerticalDivider height={"50%"}/>
            <WeatherInfoItem>
                <span>{Math.round(data.day.mintemp_c)}&deg;</span>
                <span>{Math.round(data.day.maxtemp_c)}&deg;</span>
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