import "./App.css";
import CustomerDetail from "./components/CustomerDetail";
import Header from "./components/Header";
import CustomerList from "./components/CustomerList";
import { useState, useEffect } from "react";

type Address = {
  address: string;
  city: string;
  postalCode: string;
  state: string;
};
type Company = {
  title: string;
  name: string;
  department: string;
  address: Address;
};
type UserFromAPI = {
  id: number;
  firstName: string;
  email: string;
  address: Address;
  company: Company;
};
export type User = {
  id: number;
  firstName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  title: string;
  detail: string;
};

const detailText: string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getUsers = async () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        const allUsers = json.users.map((user: UserFromAPI) => {
          return {
            id: user.id,
            firstName: user.firstName,
            email: user.email,
            address: user.address.address,
            city: user.address.city,
            postalCode: user.address.postalCode,
            state: user.address.state,
            title: user.company.title,
            detail: detailText,
          };
        });
        setUsers(allUsers);

        setSelectedUser(allUsers[0]);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex gap-6 w-full m-auto py-3'>
        <CustomerList
          users={users}
          selectedUser={selectedUser}
          handleClick={handleClick}
        />
        <CustomerDetail selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default App;
