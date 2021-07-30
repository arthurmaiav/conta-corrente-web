import React, { useState, useEffect  } from 'react';

import api from '../../services/api';

import { AnimationContainer, Button, BalanceContainer, BalanceText, Container, Content, Header, HeaderContent, Input, Span, TransactionsContainer, TransactionText } from './styles';

const Account: React.FC = () => {
    const account = 123456780;

    const [balance, setBalance] = useState('0');
    const [withdrawal, setWithdrawal] = useState('0');
    const [deposit, setDeposit] = useState('0');
    const [payment, setPayment] = useState('0');
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        api.get(`contaCorrente/${account}`).then(response => {
            setBalance(response.data.balance);
        })
    });

    async function handleTransaction(data: any) {
        data.preventDefault();

        const request = {
          accountNumber: account,
          value: 0
        }

        if(data.target.elements.withdrawal) {
            request.value = Number(withdrawal);
            await api.post('sacar', request).then(response => {
                setBalance(String(Number(balance) - request.value))
            })
        } else if (data.target.elements.deposit) {
            request.value = Number(deposit);
            await api.post('depositar', request).then(response => {
                setBalance(String(Number(balance) + request.value))
            })
        } else if (data.target.elements.payment) {
            request.value = Number(payment);
            await api.post('pagar', request).then(response => {
                setBalance(String(Number(balance) - request.value))
            })
        }
    }

    async function handleStatement(data: any) {
        data.preventDefault();

        await api.get(`extrato/${account}`).then(response => {
            console.log(response.data)
            setTransactions(response.data);
        })
    }
    

    return (
        <>
        <Container>
            <Header>
                <HeaderContent>
                    <Span>Conta: {account}</Span>
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
                        id="withdrawal"
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
                        id="deposit"
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
                        id="payment"
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
                    <Button type="submit" onClick={handleStatement}>Extrato</Button>
                </AnimationContainer>
            </Content>
        </TransactionsContainer>

        <ul>
            {transactions.map(transactions => (
                <li key={transactions.id}>
                    <p>{transactions.transactionType}</p>
                    <p>{transactions.value}</p>
                </li>
                ))}
        </ul>

        </>
        );
    };

export default Account;