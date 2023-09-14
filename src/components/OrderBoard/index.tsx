import { Board, OrdersContainer } from "./styles";
import { Table } from "../Table";

export function OrderBoard(props: any) {
    return (
        <Board>
            <header>
                <span>{props.icon}</span>
                <strong>{props.title}</strong>
                <span>{props.amount}</span>
            </header>

            <OrdersContainer>
                <Table />
            </OrdersContainer>
        </Board>
    );
}