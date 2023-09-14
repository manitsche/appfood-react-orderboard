import { Container } from "./styles";
import { OrderBoard } from "../OrderBoard";

export function Orders() {
    return (
        <Container>
            <OrderBoard title="Fila de espera" icon="⏰" amount="1" />
            <OrderBoard title="Preparando" icon="👨‍🍳" amount="5" />
            <OrderBoard title="Pronto para servir" icon="🍽️" amount="2" />
        </Container>
    )
}