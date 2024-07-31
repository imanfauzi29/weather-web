import {Button, Container} from "./style.ts";

export default function ButtonTabs() {
    return (
        <Container>
            <Button isActive>5 Days</Button>
            <Button>14 Days</Button>
            <Button>30 Days</Button>
        </Container>
    )
}
