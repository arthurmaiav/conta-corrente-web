import React, { useState } from 'react';

import { AnimationContainer, Button, BalanceContainer, Container, Content, Header, HeaderContent, Input, Span } from './styles';

const Account: React.FC = () => {

    const [withdrawal, setWithdrawal] = useState('');
    const [deposit, setDeposit] = useState('');
    const [payment, setPayment] = useState('');

    async function handleWithdrawal(data: any) {
        data.preventDefault();
        console.log()
    }

    return (
        <>
        <Container>
            <Header>
                <HeaderContent>
                    <Span>Bem vindo, Arthur</Span>
                </HeaderContent>
            </Header>
        </Container>

        <Container>
            <BalanceContainer>
                <h1>10000</h1>
            </BalanceContainer>
        </Container>

        <Container>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleWithdrawal}>
                    <h1>Sacar: R${withdrawal || 0},00</h1>
                    <Input
                        placeholder="R$ 0,00" 
                        value= {withdrawal}
                        onChange={e => setWithdrawal(e.target.value)}
                    />                    

                    <Button type="submit">Saque</Button>
                    </form>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                <form onSubmit={handleWithdrawal}>
                    <h1>Depósito</h1>
                    <Input
                        placeholder="R$ 0,00" 
                        value= {deposit}
                        onChange={e => setDeposit(e.target.value)}
                    />   
                    <Button type="submit">Depósito</Button>
                    </form>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                <form onSubmit={handleWithdrawal}>
                    <h1>Pagamento</h1>
                    <Input
                        placeholder="R$ 0,00" 
                        value= {payment}
                        onChange={e => setPayment(e.target.value)}
                    />   
                    <Button type="submit">Pagamento</Button>
                    </form>
                </AnimationContainer>
            </Content>
            <Content>
                <AnimationContainer>
                    <h1  style={{ paddingBottom: 55}}>Extrato</h1>  
                    <Button type="submit">Extrato</Button>
                </AnimationContainer>
            </Content>
        </Container>
        </>
        );
    };

export default Account;