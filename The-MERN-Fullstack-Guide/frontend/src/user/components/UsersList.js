import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = ({ users }) => {
  const renderUserItems = () => {
    return (
      <ul className="users-list">
        {users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      {users.length === 0 && (
        <div className="center">
          <Card>
            <h2>No users found</h2>
          </Card>
        </div>
      )}
      {users.length > 0 && renderUserItems()}
    </>
  );
};

export default UsersList;
