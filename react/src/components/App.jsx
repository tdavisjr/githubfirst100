import React, { useState, useEffect } from 'react'
import UserList from './UserList'
import Loader from './Loader'

function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://api.github.com/users")
      const data = await resp.json()

      setUsers(data)
      setIsLoading(false)
    }

    fetchData();

  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>GitHub First 100</h1>
        {isLoading ? <Loader /> : <UserList users={users} />}
      </div>
    </div>
  );
}

export default App;
