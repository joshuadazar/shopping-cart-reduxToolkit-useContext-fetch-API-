import { useSelector } from 'react-redux';
import store from '../store/store';

const UserPage = () => {
  type IUserID = ReturnType<typeof store.getState>;
  const user = useSelector((data: IUserID) => data.counter);
  return (
    <>
      <h1>User Info {user.value}</h1>
    </>
  );
};

export default UserPage;
