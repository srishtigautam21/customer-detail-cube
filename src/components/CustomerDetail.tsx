import Grid from "./Grid";
import loader from "../assets/loader.gif";

const CustomerDetail = (props: any) => {
  const { selectedUser } = props;
  return (
    <section className='w-[60%] h-screen py-5 px-16'>
      {selectedUser ? (
        <div className='w-full'>
          <h3 className='font-bold text-[20px] text-blue-800 pb-3'>
            {selectedUser.firstName}
          </h3>
          <div className='font-medium text-[18px] '>
            {selectedUser.firstName} is a {selectedUser.title}. He/She lives in{" "}
            {selectedUser.address}, {selectedUser.city} -{" "}
            {selectedUser.postalCode}, {selectedUser.state}.
          </div>
          <p className='py-4'>{selectedUser.detail}</p>
        </div>
      ) : (
        <div className='m-5 w-full flex justify-center'>
          <img src={loader} alt='loader' />
        </div>
      )}
      <div className='w-full flex items-center justify-center'>
        <Grid />
      </div>
    </section>
  );
};

export default CustomerDetail;
