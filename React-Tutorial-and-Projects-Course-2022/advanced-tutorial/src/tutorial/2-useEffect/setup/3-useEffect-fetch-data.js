import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUserData() {
    let response = await fetch(url);
    let data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {!loading &&
          users.map(user => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
