import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
    onOpenNewTransactinModal: () => void;
}

export function Header ({ onOpenNewTransactinModal }: IHeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Mabis" />
                <button type="button" onClick={onOpenNewTransactinModal}>Nova transação</button>
            </Content>
        </Container>
    )
}