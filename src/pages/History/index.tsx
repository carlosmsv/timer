import { HistoryContainer, HistoryList, Status } from './styles'

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
              <td>5 minutes ago</td>
              <td>
                <Status statusColor="yellow">In Progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>15 min</td>
              <td>1 month ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>10 min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Interrupted</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>30 min</td>
              <td>3 months ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
