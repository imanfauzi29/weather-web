import styled from "styled-components";

export default function ButtonTabs() {
    return (
        <Container>
            <Button isActive>5 Days</Button>
            <Button>14 Days</Button>
            <Button>30 Days</Button>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
`

type ButtonStyleProps = {
    isActive?: boolean
}
const Button = styled.button<ButtonStyleProps>`
    outline: none;
    border: none;
    padding: 6px 12px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    background-color: ${props => props.isActive ? "rgba(19,19,19,0.22)" : "transparent"};
    transition: all .5s;

    &:hover {
        background-color: rgba(19, 19, 19, 0.22);
    }
`