import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
