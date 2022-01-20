import React from "react";
import { UserListUI } from "./UserListUI";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { useReducerWrapper } from "../hooks/useReducerWrapper";

function UserList() {
  const { state } = useReducerWrapper();
  const users = useFetchUsers();

  return (
    <>
      <div> Users List</div>
      <div> Loading state: {state.isLoading ? "Loading" : "Success"}</div>
      <UserListUI users={users} />
    </>
  );
}

export { UserList };
