import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    { id: "u1", name: "David", image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png", places: 3 }
  ];
  return <UsersList users={USERS} />;
};

export default Users;
