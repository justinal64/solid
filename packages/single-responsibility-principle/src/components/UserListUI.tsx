import React from "react";
import { FilteredUser, User } from "../types";
import { useFilteredUsers } from "../hooks/useFilteredUsers";

interface UserListUIProps {
  users: User[];
}

function UserListUI({ users }: UserListUIProps) {
  const filteredUsers = useFilteredUsers(users);

  const showDetails = (userId: number) => {
    const user = filteredUsers.find((user: FilteredUser) => user.id === userId);
    alert(user?.contact);
  };

  return (
    <>
      {users.map((user: User) => {
        return (
          <div
            style={{ color: "blue" }}
            key={user.id}
            onClick={() => showDetails(user.id)}
          >
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        );
      })}
    </>
  );
}

export { UserListUI };
