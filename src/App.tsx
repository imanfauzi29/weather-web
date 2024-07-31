import styled from "styled-components";
import BackgroundVideo from "components/BackgroundVideo";
import WeatherLocation from "components/WeatherLocation";
import VerticalDivider from "components/Divider/Vertical.tsx";
import HorizontalDivider from "components/Divider/Horizontal.tsx";
import VerticalForecast from "components/Forecast/Vertical.tsx";


function App() {
    return (
        <>
            <Container>
                <BackgroundVideo src={"/src/assets/rain.mp4"}/>
                <WeatherContainer>
                    <WeatherInfo>
                        <WeatherDateTime>
                            <p>Friday, 23 april</p>
                            <VerticalDivider height={"10px"}/>
                            <p>11:00</p>
                        </WeatherDateTime>
                        <CurrentWeatherContainer>
                            <h1>Heavy Rain</h1>
                            <HorizontalDivider/>
                            <div>
                                <VerticalForecast/>
                            </div>
                        </CurrentWeatherContainer>
                    </WeatherInfo>
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

const WeatherInfo = styled.div`
    width: 100%;
    padding: 42px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
export default App
