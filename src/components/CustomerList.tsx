import { User } from "../App";
import loader from "../assets/loader.gif";

type AllProps = {
  users: {
    id: number;
    firstName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    title: string;
    detail: string;
  }[];
  selectedUser: User | null;
  handleClick: (event: any) => void;
};

const CustomerList = (props: AllProps) => {
  const { users, selectedUser, handleClick } = props;
  return (
    <section className=' max-w-[40%] w-[30%] h-[1150px]'>
      <ul className='overflow-y-scroll h-[120vh]'>
        {users.length > 0 ? (
          users.map((user: User) => {
            return (
              <li
                key={user.id}
                className={` border-b-[1px] border-slate-300 overflow-hidden p-5 cursor-pointer ${
                  selectedUser?.id === user.id
                    ? "bg-slate-400 "
                    : "hover:bg-slate-200"
                }`}
                onClick={() => handleClick(user)}
              >
                <h3 className='font-bold text-[15px] text-blue-800'>
                  {user.id}. {user.firstName}
                </h3>
                <div>
                  <span>{user.title} </span>
                  <span>{user.title} </span>
                  <span>{user.title} </span>
                  <span>{user.title} </span>
                </div>
              </li>
            );
          })
        ) : (
          <div className='m-5 w-full h-full flex items-center justify-center'>
            <img src={loader} alt='loader' />
          </div>
        )}
      </ul>
    </section>
  );
};

export default CustomerList;
