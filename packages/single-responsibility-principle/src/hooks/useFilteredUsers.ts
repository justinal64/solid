import { useEffect, useState } from "react";
import { FilteredUser, User } from "../types";

function useFilteredUsers(users: User[]) {
  // function useFilteredUsers(users: User[]) {
  const [filteredUsers, setFilteredUsers] = useState<Array<FilteredUser>>([]);

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

  return filteredUsers;
}

export { useFilteredUsers };
