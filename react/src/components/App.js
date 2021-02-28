import React, { useState, useEffect, useRef } from 'react'
import UserList from './UserList'
import Loader from './Loader'

function App() {

  const [users, setUsers] = useState([])
  const isLoading = useRef(true)

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://api.github.com/users")
      const data = await resp.json();

      isLoading.current = false;
      setUsers(data);
    }
    fetchData();

  }, []);

  return (
    <div>
      <div className="page-header">
        <h1>GitHub First 100</h1>
        <Loader loading={isLoading.current} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
