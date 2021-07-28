import React from 'react';

import { AnimationContainer, Button, Container, Content } from './styles';

const Account: React.FC = () => {
    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <h1>Saque</h1>

                    <Button type="submit">Saque</Button>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                    <h1>Depósito</h1>

                    <Button type="submit">Depósito</Button>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                    <h1>Pagamento</h1>

                    <Button type="submit">Pagamento</Button>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                    <h1>Extrato</h1>

                    <Button type="submit">Extrato</Button>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default Account;