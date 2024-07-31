import styled from "styled-components";
import marker from "assets/icons/marker-icon.svg"
import React from "react";

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Container>
            <Marker src={marker} alt={"marker"}/>
            <StyledInput placeholder={"Search city here..."} type="text" {...props}/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
`

const Marker = styled.img`
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
`

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 16px 12px 28px;
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);

    &::placeholder,
    &::-webkit-input-placeholder {
        color: white;
    }

    &:-ms-input-placeholder {
        color: white;
    }
`