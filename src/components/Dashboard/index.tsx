import { Container } from "../Dashboard/styles"
import { Summary } from "../Summary"
import { TransactionsTabel } from "../TransactionsTable"

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionsTabel/>
    </Container>
  )
}