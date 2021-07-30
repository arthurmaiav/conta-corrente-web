import React, { useState, useEffect  } from 'react';

import api from '../../services/api';

import { AnimationContainer, Button, BalanceContainer, BalanceText, Container, Content, Header, HeaderContent, Input, Span, TransactionsContainer, TransactionText } from './styles';

const Account: React.FC = () => {
    const [balance, setBalance] = useState('0');
    const [withdrawal, setWithdrawal] = useState('');
    const [deposit, setDeposit] = useState('');
    const [payment, setPayment] = useState('');

    useEffect(() => {
        api.get(`contaCorrente/${777}`).then(response => {
            setBalance(response.data.balance);
        })
    });

    async function handleTransaction(data: any) {
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
                <BalanceText>{balance},00</BalanceText>
            </BalanceContainer>
        </Container>

        <TransactionsContainer>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleTransaction}>
                    <h1>Saque</h1>
                    <TransactionText>Sacar: R${withdrawal || 0},00</TransactionText>
                    <Input
                        type="number" 
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
                <form onSubmit={handleTransaction}>
                    <h1>Depósito</h1>
                    <TransactionText>Depositar: R${deposit || 0},00</TransactionText>
                    <Input
                        type="number" 
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
                <form onSubmit={handleTransaction}>
                    <h1>Pagamento</h1>
                    <TransactionText>Pagar: R${payment || 0},00</TransactionText>
                    <Input
                        type="number" 
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
                    <h1 style={{ paddingBottom: 30}}>Extrato</h1>  
                    <TransactionText style={{ paddingBottom: 55}}>Gerar extrato</TransactionText>
                    <Button type="submit">Extrato</Button>
                </AnimationContainer>
            </Content>
        </TransactionsContainer>
        </>
        );
    };

export default Account;