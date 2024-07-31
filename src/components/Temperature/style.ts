import styled from "styled-components";

export const TemperatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const TemperatureText = styled.h1`
    font-size: 80px;
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 50px;
    }
    @media (max-width: 480px) {
        font-size: 30px;
    }
    @media (max-width: 320px) {
        font-size: 20px;
    }
`

export const WindSpeedText = styled.span`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.51);
    display: flex;
    align-items: center;
    gap: 5px;
`