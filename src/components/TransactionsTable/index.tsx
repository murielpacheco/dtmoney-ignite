import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTabel() {
  const {transactions} = useTransactions();

  return (
    <Container>
      {transactions.length > 0 ? (
        <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(transaction.createdAt)
            )}
            </td>
          </tr>
          ))}
        </tbody>

      </table>
      ) : (
        <span>Insira sua primeira transação.</span>
      ) }
      
    </Container>
  )
}