import { useSelector } from 'react-redux';
import store from '../store/store';

const Counter = () => {
  const count = useSelector(
    (state: ReturnType<typeof store.getState>) => state.counter.value
  );

  return (
    <div>
      <h2>Contador: {count}</h2>
    </div>
  );
};

export default Counter;
