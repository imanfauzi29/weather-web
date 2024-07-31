import styled from "styled-components";
import BackgroundVideo from "components/BackgroundVideo";
import WeatherLocation from "components/WeatherLocation";
import WeatherInfo from "components/WeatherInfo";
import {useEffect} from "react";
import {getForecastWeather} from "services/weather.ts";
import {useCurrentWeatherStore} from "store/useCurrentWeatherStore.ts";
import {videoBg} from "utils/video.ts";


function App() {
    const {q, current, setWeather, setForecast} = useCurrentWeatherStore(state => state)

    useEffect(() => {
        getForecastWeatherService()
    }, [q])

    const getForecastWeatherService = async () => {
        try {
            const {current, forecast, location} = await getForecastWeather({q, days: 1})

            setWeather(current, location)
            setForecast(forecast.forecastday)
        } catch (err) {
            console.log("Failed to get current weather:")
            console.error("Error: %s", err)
        }
    }

    console.log(videoBg[current?.condition.code as number])
    return (
        <>
            <Container>
                {current?.condition && (
                    <BackgroundVideo src={videoBg[current.condition.code as number]}/>
                )}
                <WeatherContainer>
                    <WeatherInfo/>
                    <WeatherLocation/>
                </WeatherContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    position: relative;
`

const WeatherContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
`

export default App
