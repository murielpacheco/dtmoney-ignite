import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../context/TransactionContext';
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext)

  console.log(transactions)

  return(
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}