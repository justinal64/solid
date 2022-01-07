import React, { useEffect, useReducer, useState } from "react";
import { User } from "../types";

const initialState = {
  isLoading: true,
};

// COMPLEX STATE MANAGEMENT
function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true };
    case "FINISHED":
      return { isLoading: false };
    default:
      return state;
  }
}

function UserList() {
  const [users, setUsers] = useState<[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any>([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const showDetails = (userId: number) => {
    const user = filteredUsers.find((user: User) => user.id === userId);
    alert(user?.contact);
  };

  // REMOTE DATA FETCHING
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FINISHED" });
        setUsers(json);
      });
  }, []);

  // PROCESSING DATA
  useEffect(() => {
    const filteredUsers = users.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        contact: `${user.phone} , ${user.email}`,
      };
    });
    setFilteredUsers(filteredUsers);
  }, [users]);

  // COMPLEX UI RENDERING
  return (
    <>
      <div> Users List</div>
      <div> Loading state: {state.isLoading ? "Loading" : "Success"}</div>
      {users.map((user: User) => {
        return (
          <div key={user.id} onClick={() => showDetails(user.id)}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        );
      })}
    </>
  );
}

export { UserList };
