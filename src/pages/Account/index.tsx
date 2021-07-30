import React, { useState, useEffect  } from 'react';

import api from '../../services/api';

import { AnimationContainer,
    Button,
    BalanceContainer,
    BalanceText,
    Container,
    Content,
    Header,
    HeaderContent,
    List,
    ListItem,
    Input,
    Span,
    TransactionsContainer,
    TransactionText
    } from './styles';

const Account: React.FC = () => {
    const account = 123456780;

    const [balance, setBalance] = useState('0');
    const [withdrawal, setWithdrawal] = useState('');
    const [deposit, setDeposit] = useState('');
    const [payment, setPayment] = useState('');
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
                        min="0"
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
                        min="0"
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
                        min="0"
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

        <List>
        <ListItem>
            <TransactionText style={{ marginLeft: `10%`}}> <h3>Tipo</h3> </TransactionText>
            <TransactionText style={{ marginLeft: `30%`}}><h3>Valor</h3></TransactionText>
            <TransactionText style={{ marginLeft: `37%`}}><h3>Data</h3></TransactionText>
        </ListItem>

            {transactions.map(transactions => (
                <ListItem key={transactions.id}>
                    <TransactionText style={{ marginLeft: `10%`}}>{transactions.transactionType}</TransactionText>
                    <TransactionText style={{ marginLeft: `30%`}}>R${transactions.value},00</TransactionText>
                    <TransactionText style={{ marginLeft: `30%`}}>{transactions.createdAt}</TransactionText>
                </ListItem>
                ))}
        </List>

        </>
        );
    };

export default Account;