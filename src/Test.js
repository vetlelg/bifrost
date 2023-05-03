import { useEffect, useState } from 'react'

const Test = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("/customer/123")
          .then(response => response.json())
          .then(data => setCustomers(data))
      }, [])
      
      return (
        <table>
          <th>Id</th>
          <th>Name</th>
          {customers.map(customer => {
            return (
              <tr>
                <td>{customer.CustomerID}</td>
                <td>{customer.CustomerName}</td>
              </tr>
            )
            })}
        </table>
      );
}

export default Test;