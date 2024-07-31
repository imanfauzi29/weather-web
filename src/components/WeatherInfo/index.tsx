import VerticalDivider from "components/Divider/Vertical.tsx";
import HorizontalDivider from "components/Divider/Horizontal.tsx";
import styled from "styled-components";
import {useCurrentWeatherStore} from "store/useCurrentWeatherStore.ts";
import VerticalForecast from "components/Forecast/Vertical.tsx";
import {useMemo} from "react";
import {formatDateTime} from "utils/formatDate.ts";

export default function WeatherInfo() {
    const {current, location, forecast_day} = useCurrentWeatherStore(state => state)

    const [date, time] = useMemo(() => formatDateTime(location?.localtime), [location])

    return (
        <Container>
            <WeatherDateTime>
                <p>{date}</p>
                <VerticalDivider height={"10px"}/>
                <p>{time}</p>
            </WeatherDateTime>
            <CurrentWeatherContainer>
                <h1>{current?.condition.text}</h1>
                <HorizontalDivider/>
                <VerticalForestContainer>
                    {forecast_day && forecast_day[0].hour.map((hour, i) => (
                        <VerticalForecast {...hour} key={i}/>
                    ))}
                </VerticalForestContainer>
            </CurrentWeatherContainer>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    padding: 42px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: auto;
`

const WeatherDateTime = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    color: white;
`

const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > h1 {
        text-align: end;
        font-size: 100px;
        color: white;
        font-weight: 500;
        background: -webkit-linear-gradient(#eee, #606060);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const VerticalForestContainer = styled.div`
    display: flex;
    gap: 20px;
    overflow: auto;
    width: 100%;
`