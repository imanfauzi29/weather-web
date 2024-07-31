import styled from "styled-components";

export const WeatherContainer = styled.div`
    width: 450px;
    background: rgba(76, 76, 76, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 32px 30px;

    & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 60px;

        & > hr {
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    }
`

export const NextForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.h4`
    color: white;
    font-size: 18px;
    text-align: center;
`

export const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`